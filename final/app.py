# app.py

from flask import Flask, render_template, jsonify
from data.realtimeDataFetch.realtime_data import AqiStudy 
import pandas as pd
import time

app = Flask(__name__)

# 路由用于提供数据
@app.route('/fetch_aqi_data')
def fetch_aqi_data():

    # 创建 AqiStudy 对象
    aqi_study = AqiStudy()
    
    # 运行 AqiStudy
    aqi_study.run()
    
    # 读取 CSV 文件

    df = pd.read_csv('./realtimeData.csv')

    # 将DataFrame转换为字典列表
    city_data = df.to_dict(orient='records')
    
    data_dict_list = []

    for city_info in city_data:
        data_dict = {
            '城市': city_info['City'],
            'AQI': city_info['AQI'],
            'level': city_info['level'],
            'weather': city_info['weather'],
            'temperature': city_info['temperature'],  # 将温度转换为字符串
            'PM2.5': city_info['PM2.5'],  # 将PM2.5转换为字符串
        }
        
        data_dict_list.append(data_dict)
    # print(data_dict_list)
    
    # 返回数据给 HTML
    return jsonify(data_dict_list)

# 主页路由
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False)
