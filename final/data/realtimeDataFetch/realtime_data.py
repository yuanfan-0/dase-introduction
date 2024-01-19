import base64
import json
import re

import execjs
import requests
from loguru import logger

import pandas as pd

import os


class AqiStudy(object):
    """
    分析流程:
        1.无线debugger --> never pause here
        2.反调试脚本绕过 mitmweb -p 8890 -s mitmweb_test.py
            https://www.aqistudy.cn/?mobile=false --> mitmweb 脚本替换
            https://www.aqistudy.cn/html/city_realtime.php?v=2.3 mitmweb 脚本替换
        3.encrypt_e9OKk3qfXQqT.js 动态返回 --> GET https://www.aqistudy.cn/html/city_realtime.php?v=2.3 提取js链接 请求
        4.解密encrypt_e9OKk3qfXQqT.js
        5.补充执行环境依赖 https://www.aqistudy.cn/js/jquery.min.js?v=1.3 静态返回
        6.提取 加密函数名称 data加密参数名称 解密函数名称
        7.执行加密函数 请求
        8.执行解密函数 获取结果
    """

    def __init__(self):
        self.root_url = 'https://www.aqistudy.cn'
        self.session = requests.Session()
        
        script_dir = os.path.dirname(os.path.abspath(__file__))
        self.js_pattern_path = os.path.join(script_dir, 'js', 'encrypt.js')
        # self.js_pattern_path = r'js/encrypt.js'
        self.js_pattern = self.read_js_pattern(self.js_pattern_path)

    def read_js_pattern(self, js_pattern_path):
        """
        读取js模板文件
        :param js_pattern_path:
        :return:
        """
        with open(js_pattern_path, 'r', encoding='utf-8') as f:
            js_pattern = f.read()
        return js_pattern

    def get_js_code(self):
        """
        3.encrypt_e9OKk3qfXQqT.js 动态返回 --> GET https://www.aqistudy.cn/html/city_realtime.php?v=2.3 提取js链接 请求
        :return:
        """
        url = f'{self.root_url}/html/city_realtime.php?v=2.3'
        headers = {
            'Referer': 'https://www.aqistudy.cn/?mobile=false',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
                        'Chrome/100.0.4896.127 Safari/537.36'
        }

        # Disable SSL/TLS certificate verification
        response = self.session.get(url, headers=headers, verify=True)

        response_str = response.content.decode('utf-8', 'ignore')
        search_js_path = re.search(r'src="\.\.(/js/encrypt_\w+\.min\.js\?v=\d+)"', response_str, re.S)
        js_code_path = search_js_path.group(1) if search_js_path else ''
        js_code_url = f'{self.root_url}{js_code_path}'

        js_code_resp = requests.get(js_code_url, headers=headers, verify=False)
        js_code = js_code_resp.content.decode('utf-8', 'ignore')

        return js_code


    def decode_js_code(self, js_code):
        """
        4.解密encrypt_e9OKk3qfXQqT.js
        :param js_code:
        :return:
        """
        while True:
            if js_code.startswith('eval(function'):
                js_code = js_code[5:-2]
                js_pattern = self.js_pattern.replace('js_code_pattern', js_code)
                js_pattern_compile = execjs.compile(js_pattern)
                js_code = js_pattern_compile.call('run_js_code')
            elif js_code.startswith('eval(dswejwehxt'):
                count_dswejwehxt = js_code.count('dswejwehxt')
                search_base64_js_code = re.search(r"'(.*?)'", js_code)
                base64_js_code = search_base64_js_code.group(1) if search_base64_js_code else ''
                for _ in range(count_dswejwehxt):
                    base64_js_code = base64.b64decode(base64_js_code).decode('utf-8')
                js_code = base64_js_code
            else:
                break

#         logger.info(f'\n{js_code}')
        return js_code

    def get_all_js_code(self, js_code):
        """
        5.补充执行环境依赖 https://www.aqistudy.cn/js/jquery.min.js?v=1.3 静态返回
        :param js_code:
        :return:
        """
        all_js_code = f'{self.js_pattern}\n{js_code}'
        # logger.info(all_js_code)
        all_js_code_compile = execjs.compile(all_js_code)
        return all_js_code, all_js_code_compile

    def get_names(self, all_js_code):
        """
        6.提取 加密函数名称 data加密参数名称 解密函数名称
        :param all_js_code:
        :return:
        """
        # 加密函数名称
        search_encrypt_func_name = re.search(r'var\s*(\w+?)\s*=\s*\(function\s*\(\)\s*{', all_js_code, re.S)
        encrypt_func_name = search_encrypt_func_name.group(1) if search_encrypt_func_name else ''

        # 加密参数名称
        search_param_name = re.search(r'data:\s*{\s*(\w+):\s*(\w+)\s*},', all_js_code, re.S)
        param_name = search_param_name.group(1) if search_param_name else ''

        # 解密函数名称
        search_decrypt_func_name = re.search(
            r'success:\s*function\s*\(\w+\)\s*{\s*\w+\s*=\s*(\w+)\(\w+\);', all_js_code, re.S)
        decrypt_func_name = search_decrypt_func_name.group(1) if search_decrypt_func_name else ''

#         logger.info(f'{encrypt_func_name}, {param_name}, {decrypt_func_name}')
        return encrypt_func_name, param_name, decrypt_func_name

    def get_city_data(self, all_js_code_compile, encrypt_func_name, param_name, type_, city_dict):
        """
        7.执行加密函数 请求
        :return:
        """
        param_ret = all_js_code_compile.call(encrypt_func_name, type_, city_dict)
        # logger.info(f'{param_name} {param_ret}')

        response_str = self.get_aqistudyapi_request(param_name, param_ret)
        # logger.info(f'{response_str}')
        return response_str

    def get_aqistudyapi_request(self, param_name, param_ret):
        url = f'{self.root_url}/apinew/aqistudyapi.php'
        data = {
            f'{param_name}': param_ret
        }
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': 'https://www.aqistudy.cn/html/city_realtime.php?v=2.3',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
        }
        response = requests.post(url, headers=headers, data=data)
        response_str = response.content.decode('utf-8')
        return response_str

    def decrypt_resp(self, all_js_code_compile, decrypt_func_name, response_str):
        """
        解密响应
        """
        ret = all_js_code_compile.call(decrypt_func_name, response_str)
        response_dict = json.loads(ret)
#         logger.info(response_dict)
        return response_dict
    
    def save_to_csv(self, data_dict_list, csv_filename='realtimeData.csv'):
        """
        保存数据到CSV文件
        :param data_dict_list: 包含多个字典的列表，每个字典对应一个城市的空气质量数据
        :param csv_filename: CSV文件名，默认为'output_data.csv'
        """
        df = pd.DataFrame(data_dict_list)
        df.to_csv(csv_filename, index=False, encoding='utf-8')
        print(f'Data saved to {csv_filename}')

    def run(self):
        js_code = self.get_js_code()

        js_code = self.decode_js_code(js_code)

        all_js_code, all_js_code_compile = self.get_all_js_code(js_code)

        encrypt_func_name, param_name, decrypt_func_name = self.get_names(all_js_code)

        cities = [
            '北京', '天津', '上海', '重庆', '石家庄', '太原', '西安', '济南', '郑州', 
            '沈阳', '长春', '哈尔滨', '南京', '杭州', '合肥', '南昌', '福州', '武汉', '长沙', 
            '成都', '贵阳', '昆明', '广州', '海口', '兰州', '西宁', '呼和浩特', '乌鲁木齐', 
            '拉萨', '南宁', '银川'
        ]
#         cities = ['上海']

        data_dict_list = []
        for city in cities:
            type_ = 'GETDATA'
            city_dict = {'city': city}
            response_str = self.get_city_data(all_js_code_compile, encrypt_func_name, param_name, type_, city_dict)
            response_dict = self.decrypt_resp(all_js_code_compile, decrypt_func_name, response_str)
            
            data_dict = {'City': city}

            # 检查路径是否存在，然后再添加到字典
            if 'result' in response_dict and 'data' in response_dict['result'] and 'aqi' in response_dict['result']['data']\
            and 'weather' in response_dict['result']['data']:
                data_dict['Date'] = response_dict['result']['data']['aqi']['time']
                data_dict['AQI'] = response_dict['result']['data']['aqi']['day_aqi']
                data_dict['weather'] = response_dict['result']['data']['weather']['weather']
                data_dict['level'] = response_dict['result']['data']['aqi']['level']
            else:
                #缺失数据处理
                data_dict['Date'] = None
                data_dict['AQI'] = None
                data_dict['weather'] = None
                data_dict['level'] = None
                

            if 'result' in response_dict and 'data' in response_dict['result'] and 'aqi' in response_dict['result']['data']\
            and 'weather' in response_dict['result']['data']:
                data_dict['PM2.5'] = response_dict['result']['data']['aqi']['pm2_5']
                data_dict['PM10'] = response_dict['result']['data']['aqi']['pm10']
                data_dict['NO2'] = response_dict['result']['data']['aqi']['no2']
                data_dict['CO'] = response_dict['result']['data']['aqi']['co']
                data_dict['SO2'] = response_dict['result']['data']['aqi']['so2']
                data_dict['O3'] = response_dict['result']['data']['aqi']['o3_8h']
                data_dict['temperature'] = response_dict['result']['data']['weather']['temp']
                data_dict['humidity'] = response_dict['result']['data']['weather']['humi']
                data_dict['visibility'] = response_dict['result']['data']['weather']['visibility']
                data_dict['wind'] = response_dict['result']['data']['weather']['wdangle']
            else:
                data_dict['PM2.5'] = None
                data_dict['PM10'] = None
                data_dict['NO2'] = None
                data_dict['CO'] = None
                data_dict['SO2'] = None
                data_dict['O3'] = None
                data_dict['temperature'] = None
                data_dict['humidity'] = None
                data_dict['visibility'] = None
                data_dict['wind'] = None

            # 将城市和对应的数据添加到字典列表
            data_dict_list.append(data_dict)

        # 保存数据到CSV文件
        self.save_to_csv(data_dict_list)

if __name__ == '__main__':
    aqi_study = AqiStudy()
    aqi_study.run()
