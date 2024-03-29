﻿

var aqidata = `
城市,年份,平均AQI,优,良,轻度污染,中度污染,重度污染
上海,2014,80.45753424657535,64,219,59,18,5
上海,2015,88.57260273972602,58,197,78,25,7
上海,2016,80.81967213114754,72,201,73,18,2
上海,2017,83.63013698630137,62,208,74,18,3
上海,2018,70.06575342465753,115,193,48,6,2
上海,2019,72.53424657534246,82,227,49,6,1
上海,2020,67.93989071038251,117,201,40,7,1
上海,2021,63.95068493150685,125,210,29,1,0
上海,2022,66.03013698630137,128,190,47,0,0
上海,2023,67.17808219178082,132,188,41,3,1
乌鲁木齐,2014,111.93388429752066,18,170,119,29,23
乌鲁木齐,2015,104.86301369863014,30,210,67,25,25
乌鲁木齐,2016,109.48633879781421,49,198,39,22,44
乌鲁木齐,2017,108.62191780821918,41,200,54,21,34
乌鲁木齐,2018,85.75068493150685,52,216,35,22,25
乌鲁木齐,2019,91.6054794520548,42,235,34,29,25
乌鲁木齐,2020,89.11475409836065,58,220,40,20,27
乌鲁木齐,2021,83.55890410958904,54,240,43,15,12
乌鲁木齐,2022,85.20547945205479,73,213,44,17,16
乌鲁木齐,2023,81.3890410958904,67,231,34,19,13
兰州,2014,90.06060606060606,19,247,80,10,5
兰州,2015,88.44383561643835,10,259,82,12,1
兰州,2016,99.95901639344262,10,230,91,27,2
兰州,2017,102.78082191780823,10,227,105,12,2
兰州,2018,69.7068493150685,33,216,68,0,0
兰州,2019,82.02191780821917,27,271,62,3,0
兰州,2020,78.44535519125684,30,280,53,3,0
兰州,2021,87.61643835616438,33,263,55,6,1
兰州,2022,81.0931506849315,25,278,54,7,0
兰州,2023,89.86027397260274,30,255,67,5,3
北京,2014,124.98630136986301,44,128,86,59,33
北京,2015,121.5095890410959,56,129,70,61,34
北京,2016,113.36986301369863,62,129,85,49,30
北京,2017,102.18630136986302,69,159,75,38,17
北京,2018,86.91232876712328,85,160,79,23,13
北京,2019,86.3972602739726,85,159,88,29,4
北京,2020,78.44535519125684,106,172,67,11,10
北京,2021,77.84383561643835,114,174,55,14,6
北京,2022,73.68493150684931,139,147,61,15,2
北京,2023,82.23013698630137,105,166,62,24,5
南京,2014,106.14246575342466,23,169,125,28,18
南京,2015,95.37808219178082,33,199,97,25,11
南京,2016,90.16666666666667,50,192,97,24,3
南京,2017,86.4876712328767,61,196,87,18,2
南京,2018,78.32328767123288,64,205,67,15,5
南京,2019,85.10684931506849,54,204,95,11,1
南京,2020,73.12021857923497,96,206,58,6,0
南京,2021,72.96986301369863,91,209,61,4,0
南京,2022,74.83287671232877,88,203,70,4,0
南京,2023,74.61917808219178,95,204,57,8,1
南宁,2014,73.61369863013698,96,200,48,16,5
南宁,2015,64.22191780821917,136,187,33,7,2
南宁,2016,58.94808743169399,148,199,18,0,1
南宁,2017,58.07397260273972,188,149,27,1,0
南宁,2018,53.44931506849315,199,151,13,1,0
南宁,2019,54.701369863013696,189,157,18,1,0
南宁,2020,49.82786885245902,220,137,8,1,0
南宁,2021,53.83013698630137,200,154,11,0,0
南宁,2022,51.30684931506849,206,148,11,0,0
南宁,2023,50.73150684931507,207,154,4,0,0
南昌,2014,75.17260273972603,88,208,52,13,3
南昌,2015,68.78356164383561,98,216,45,4,2
南昌,2016,73.61475409836065,97,223,33,8,4
南昌,2017,75.4904109589041,95,205,55,7,3
南昌,2018,63.1013698630137,131,206,28,0,0
南昌,2019,70.7013698630137,85,238,42,0,0
南昌,2020,65.06284153005464,125,211,28,2,0
南昌,2021,64.92602739726027,119,215,30,0,1
南昌,2022,68.95890410958904,112,201,48,4,0
南昌,2023,68.38630136986302,101,236,25,1,2
合肥,2014,107.4904109589041,25,180,108,25,21
合肥,2015,91.11232876712329,38,222,75,17,13
合肥,2016,89.29781420765028,49,212,75,23,7
合肥,2017,94.36438356164383,48,173,115,23,6
合肥,2018,79.10958904109589,61,220,57,15,4
合肥,2019,85.7068493150685,48,211,96,8,2
合肥,2020,71.4207650273224,95,217,47,7,0
合肥,2021,70.53424657534246,95,219,45,6,0
合肥,2022,73.89315068493151,74,242,41,8,0
合肥,2023,73.6082191780822,85,229,44,4,2
呼和浩特,2014,86.75616438356164,41,221,85,12,5
呼和浩特,2015,86.36438356164383,53,220,68,11,12
呼和浩特,2016,84.06557377049181,60,221,63,18,3
呼和浩特,2017,89.84657534246575,37,217,88,20,1
呼和浩特,2018,65.16986301369863,58,236,36,1,1
呼和浩特,2019,80.7095890410959,66,226,60,7,4
呼和浩特,2020,83.93989071038251,96,200,37,14,15
呼和浩特,2021,80.46575342465754,94,224,31,3,4
呼和浩特,2022,67.25753424657535,111,218,30,5,0
呼和浩特,2023,82.0931506849315,73,220,51,12,5
哈尔滨,2014,101.54395604395604,79,159,55,32,25
哈尔滨,2015,100.00821917808219,93,149,65,18,29
哈尔滨,2016,78.89890710382514,103,181,56,18,7
哈尔滨,2017,91.43287671232876,92,177,49,18,21
哈尔滨,2018,68.71232876712328,140,168,35,10,7
哈尔滨,2019,73.35890410958905,144,161,33,11,14
哈尔滨,2020,76.82513661202186,147,157,27,14,15
哈尔滨,2021,67.96712328767123,136,174,39,11,5
哈尔滨,2022,66.64109589041095,170,141,31,14,8
哈尔滨,2023,71.69041095890411,147,157,45,6,6
天津,2014,121.14520547945206,14,151,114,44,35
天津,2015,102.92328767123287,37,184,89,30,20
天津,2016,103.93442622950819,26,199,88,23,24
天津,2017,107.66027397260274,29,175,102,34,20
天津,2018,91.48219178082192,44,177,97,31,5
天津,2019,99.86575342465754,44,178,87,42,14
天津,2020,90.46994535519126,66,178,91,20,11
天津,2021,85.03835616438356,62,202,83,11,5
天津,2022,80.72602739726027,89,178,83,11,3
天津,2023,96.23013698630137,60,173,83,37,8
太原,2014,102.85753424657534,23,189,100,29,23
太原,2015,93.04109589041096,35,208,91,19,11
太原,2016,102.99726775956285,26,210,78,27,17
太原,2017,114.43287671232876,12,163,131,36,16
太原,2018,96.00821917808219,19,184,125,21,7
太原,2019,104.04383561643836,17,183,117,36,10
太原,2020,97.52732240437159,27,198,114,12,15
太原,2021,101.2904109589041,47,176,96,34,5
太原,2022,91.26575342465753,45,196,94,26,3
太原,2023,96.07671232876713,37,200,97,25,2
广州,2014,77.52602739726028,83,201,68,12,1
广州,2015,67.6,120,201,34,10,0
广州,2016,69.89071038251366,112,198,45,9,2
广州,2017,76.43835616438356,71,218,63,10,3
广州,2018,70.13150684931507,105,207,50,3,0
广州,2019,74.48219178082192,90,203,60,12,0
广州,2020,64.37158469945355,148,182,30,5,1
广州,2021,64.86575342465754,136,187,38,4,0
广州,2022,62.202739726027396,187,120,54,4,0
广州,2023,60.44931506849315,169,162,33,1,0
成都,2014,103.84383561643835,35,201,68,27,28
成都,2015,99.69315068493151,30,188,107,20,19
成都,2016,100.77868852459017,27,180,111,37,11
成都,2017,99.14794520547945,36,195,94,16,22
成都,2018,78.58630136986301,77,193,75,8,4
成都,2019,76.76438356164384,78,208,64,15,0
成都,2020,76.31967213114754,106,172,77,9,2
成都,2021,74.23835616438356,103,197,49,15,1
成都,2022,77.18630136986302,93,188,77,7,0
成都,2023,78.31506849315069,91,194,60,18,2
拉萨,2014,61.38904109589041,95,264,5,1,0
拉萨,2015,64.16712328767123,83,266,16,0,0
拉萨,2016,73.44808743169399,56,254,55,1,0
拉萨,2017,58.78904109589041,123,235,5,2,0
拉萨,2018,52.92054794520548,192,170,2,0,0
拉萨,2019,52.51780821917808,207,158,0,0,0
拉萨,2020,50.34426229508197,218,148,0,0,0
拉萨,2021,48.961643835616435,239,126,0,0,0
拉萨,2022,53.00821917808219,207,157,1,0,0
拉萨,2023,59.23013698630137,167,188,10,0,0
昆明,2014,56.83561643835616,120,238,7,0,0
昆明,2015,53.83287671232877,169,188,8,0,0
昆明,2016,55.30874316939891,140,223,3,0,0
昆明,2017,56.00821917808219,152,207,6,0,0
昆明,2018,49.082191780821915,220,144,1,0,0
昆明,2019,54.8054794520548,184,172,9,0,0
昆明,2020,48.84153005464481,203,162,1,0,0
昆明,2021,50.4,208,152,5,0,0
昆明,2022,48.347945205479455,246,119,0,0,0
昆明,2023,54.28219178082192,189,167,9,0,0
杭州,2014,90.4,43,205,97,13,7
杭州,2015,87.4904109589041,55,205,87,13,5
杭州,2016,85.59836065573771,49,210,92,12,3
杭州,2017,85.0,62,207,71,22,3
杭州,2018,76.26301369863013,79,214,61,11,0
杭州,2019,80.2931506849315,61,225,68,11,0
杭州,2020,67.46448087431693,100,234,29,3,0
杭州,2021,67.95616438356164,114,207,38,6,0
杭州,2022,72.03561643835616,102,201,56,6,0
杭州,2023,70.92328767123287,103,204,53,4,1
武汉,2014,112.90384615384616,32,148,123,24,32
武汉,2015,103.23351648351648,32,169,117,27,17
武汉,2016,92.53005464480874,52,186,95,26,7
武汉,2017,89.13698630136986,62,188,91,18,5
武汉,2018,78.61643835616438,63,211,65,12,4
武汉,2019,88.00821917808219,40,206,102,15,2
武汉,2020,72.15300546448087,101,209,51,3,2
武汉,2021,76.81369863013698,77,212,67,8,1
武汉,2022,76.6054794520548,88,206,59,11,1
武汉,2023,79.41643835616438,84,205,61,9,6
沈阳,2014,111.27397260273973,12,178,110,38,23
沈阳,2015,109.84383561643835,28,179,96,30,24
沈阳,2016,90.54918032786885,41,208,93,11,12
沈阳,2017,90.74246575342465,40,216,73,25,11
沈阳,2018,71.81095890410958,86,200,59,10,1
沈阳,2019,80.95890410958904,70,214,61,13,6
沈阳,2020,78.64207650273224,80,207,56,15,7
沈阳,2021,70.08219178082192,119,196,41,4,5
沈阳,2022,65.21917808219177,131,189,40,4,1
沈阳,2023,73.67397260273972,98,204,52,8,1
济南,2014,130.96694214876032,0,95,181,52,30
济南,2015,128.52747252747253,8,125,139,54,28
济南,2016,117.33060109289617,5,161,133,43,21
济南,2017,111.33972602739726,7,178,125,35,15
济南,2018,97.44109589041096,15,196,115,20,10
济南,2019,106.6,15,171,125,43,10
济南,2020,96.52732240437159,24,199,113,20,10
济南,2021,95.79178082191781,47,182,105,22,3
济南,2022,87.85479452054794,39,200,105,19,2
济南,2023,98.67397260273972,47,167,119,22,6
海口,2014,41.032876712328765,280,78,6,1,0
海口,2015,42.83013698630137,280,79,6,0,0
海口,2016,43.08196721311475,275,86,4,1,0
海口,2017,44.31780821917808,267,85,13,0,0
海口,2018,39.4027397260274,295,65,5,0,0
海口,2019,46.654794520547945,274,67,24,0,0
海口,2020,42.49726775956284,281,80,5,0,0
海口,2021,42.52876712328767,281,78,6,0,0
海口,2022,43.21369863013699,275,80,10,0,0
海口,2023,44.553424657534244,274,83,8,0,0
石家庄,2014,158.72625698324023,10,98,111,43,65
石家庄,2015,123.48219178082192,26,143,110,38,32
石家庄,2016,135.85245901639345,22,154,83,36,48
石家庄,2017,133.74520547945207,7,143,111,52,32
石家庄,2018,112.1013698630137,10,164,109,39,29
石家庄,2019,113.8986301369863,17,156,103,42,29
石家庄,2020,102.94808743169399,31,174,114,26,19
石家庄,2021,98.2904109589041,45,195,83,26,11
石家庄,2022,92.88493150684931,42,191,102,23,7
石家庄,2023,100.06301369863014,43,181,99,30,8
福州,2014,63.31780821917808,102,242,19,0,2
福州,2015,55.361111111111114,153,197,10,0,0
福州,2016,54.631147540983605,166,195,5,0,0
福州,2017,60.0986301369863,134,214,17,0,0
福州,2018,55.42465753424658,167,187,11,0,0
福州,2019,55.33698630136986,167,193,5,0,0
福州,2020,51.38251366120219,207,158,1,0,0
福州,2021,46.16164383561644,244,121,0,0,0
福州,2022,52.81369863013698,219,136,10,0,0
福州,2023,52.11506849315069,202,156,7,0,0
西宁,2014,90.01923076923077,20,244,85,11,2
西宁,2015,82.87671232876713,19,279,57,8,0
西宁,2016,86.44262295081967,24,250,82,7,2
西宁,2017,84.55068493150685,39,265,50,5,2
西宁,2018,61.893150684931506,64,256,15,1,0
西宁,2019,70.03835616438356,58,287,18,0,0
西宁,2020,69.10382513661202,57,282,27,0,0
西宁,2021,76.6,51,279,26,1,3
西宁,2022,70.84109589041095,47,289,23,6,0
西宁,2023,72.35068493150685,61,285,11,2,2
西安,2014,112.09615384615384,16,183,102,27,32
西安,2015,96.61917808219178,14,246,67,18,19
西安,2016,116.0464480874317,15,178,98,39,29
西安,2017,124.2931506849315,18,160,103,42,26
西安,2018,95.57808219178082,30,185,87,25,17
西安,2019,104.20547945205479,41,184,90,22,22
西安,2020,91.7896174863388,56,194,79,22,15
西安,2021,91.02465753424657,62,203,65,20,10
西安,2022,102.67945205479452,26,165,137,25,10
西安,2023,100.22191780821917,63,165,87,28,15
贵阳,2014,66.48219178082192,117,203,37,8,0
贵阳,2015,59.45479452054794,139,204,21,1,0
贵阳,2016,61.58743169398907,120,230,14,1,1
贵阳,2017,54.93424657534246,177,169,19,0,0
贵阳,2018,48.66575342465753,205,158,2,0,0
贵阳,2019,50.104109589041094,213,145,7,0,0
贵阳,2020,45.19945355191257,240,123,3,0,0
贵阳,2021,47.293150684931504,232,129,4,0,0
贵阳,2022,43.38904109589041,260,105,0,0,0
贵阳,2023,48.50684931506849,230,133,2,0,0
郑州,2014,122.69041095890411,7,156,112,51,35
郑州,2015,135.013698630137,6,128,122,60,35
郑州,2016,121.41256830601093,8,149,128,38,29
郑州,2017,96.71232876712328,12,154,95,29,20
郑州,2018,96.44383561643835,20,183,81,29,16
郑州,2019,111.46849315068494,18,160,134,27,24
郑州,2020,98.90710382513662,25,206,98,27,10
郑州,2021,95.82191780821918,43,193,92,26,7
郑州,2022,96.8054794520548,32,191,109,23,8
郑州,2023,99.51780821917808,46,179,101,21,14
重庆,2014,93.11506849315069,55,196,65,33,16
重庆,2015,80.52328767123288,62,239,37,18,9
重庆,2016,80.99180327868852,56,228,72,5,5
重庆,2017,80.59452054794521,81,196,64,19,5
重庆,2018,69.21643835616439,98,220,41,6,0
重庆,2019,71.64931506849315,117,191,48,8,1
重庆,2020,66.83333333333333,126,204,31,5,0
重庆,2021,62.15890410958904,146,179,37,3,0
重庆,2022,63.45479452054794,131,202,31,1,0
重庆,2023,66.84931506849315,121,204,33,7,0
银川,2014,81.6565934065934,14,284,51,14,0
银川,2015,88.12602739726027,18,261,63,14,8
银川,2016,95.64754098360656,10,249,73,25,8
银川,2017,98.4931506849315,9,223,104,21,5
银川,2018,63.66575342465753,29,249,30,1,0
银川,2019,75.81369863013698,32,297,32,3,1
银川,2020,80.66120218579235,36,266,49,9,6
银川,2021,85.83561643835617,44,264,40,6,2
银川,2022,77.88493150684931,43,263,47,8,4
银川,2023,87.38461538461539,26,255,67,11,2
长春,2014,97.97534246575343,28,218,74,27,11
长春,2015,100.75890410958904,40,194,86,17,20
长春,2016,81.46448087431693,51,238,57,15,5
长春,2017,82.9068493150685,69,207,61,16,10
长春,2018,59.40547945205479,134,194,27,0,1
长春,2019,71.03013698630137,128,178,38,16,5
长春,2020,72.90163934426229,146,159,33,13,12
长春,2021,60.895890410958906,170,161,26,7,1
长春,2022,59.71780821917808,182,154,22,6,1
长春,2023,69.90958904109588,151,164,35,7,3
长沙,2014,100.63461538461539,42,180,92,24,21
长沙,2015,86.52341597796143,68,189,68,27,11
长沙,2016,82.72404371584699,68,200,78,17,3
长沙,2017,85.20821917808219,84,173,78,17,12
长沙,2018,76.07671232876713,88,211,44,11,5
长沙,2019,83.58904109589041,76,199,69,13,8
长沙,2020,70.77595628415301,123,187,47,9,0
长沙,2021,75.61369863013698,95,209,47,7,7
长沙,2022,71.3917808219178,116,186,57,4,2
长沙,2023,71.51373626373626,109,211,30,7,7
`;

// 将原始数据解析成对象
var lines = aqidata.trim().split('\n');
var header = lines[0].split(',');
var AQIdata = {};
for (var i = 1; i < lines.length; i++) {
    var values = lines[i].split(',');
    var city = values[0];
    var year = values[1];
    var aqi = Math.round(parseFloat(values[2]));
    
    if (!AQIdata[city]) {
        AQIdata[city] = [];
    }
    
    AQIdata[city].push(aqi);
}

// 将原始数据解析成二维数组
const rawDataArray = aqidata.trim().split('\n').map(line => line.split(','));

const resultByCity = {};

var pieData = {2014:[0,0,0,0,0],2015:[0,0,0,0,0],2016:[0,0,0,0,0],2017:[0,0,0,0,0],2018:[0,0,0,0,0],2019:[0,0,0,0,0],2020:[0,0,0,0,0],2021:[0,0,0,0,0],2022:[0,0,0,0,0],2023:[0,0,0,0,0]}

// 处理数据
for (const data of rawDataArray.slice(1)) {
    const city = data[0];
    const year = data[1];
    const aqi_index = data[2];
    if(aqi_index <= 50){
        pieData[year][0]++;
    }
    else if(aqi_index <= 100){
        pieData[year][1]++;
    }
    else if(aqi_index <= 150){
        pieData[year][2]++;
    }
    else if(aqi_index <= 100){
        pieData[year][3]++;
    }
    else{
        pieData[year][4]++;
    }
    // 判断年份是否在2017-2023范围内
    if (year >= 2017 && year <= 2023) {
        const levelsData = data.slice(3); // 优、良、轻度污染、中度污染、重度污染的天数

        if (!resultByCity[city]) {
            resultByCity[city] = [];
        }

        // 将处理后的数据推入结果数组
        resultByCity[city].push(levelsData);
    }
}

// 转置数据
for (const city in resultByCity) {
    resultByCity[city] = resultByCity[city][0].map((col, i) =>
        resultByCity[city].map(row => parseInt(row[i], 10))
    );
}
console.log("-----")
console.log(resultByCity);

$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();


function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        var loop_index = 0;
        var option;

        var cities = [
            '北京', '天津', '上海', '重庆', '石家庄', '太原', '西安', '济南', '郑州', 
            '沈阳', '长春', '哈尔滨', '南京', '杭州', '合肥', '南昌', '福州', '武汉', '长沙', 
            '成都', '贵阳', '昆明', '广州', '海口', '兰州', '西宁', '呼和浩特', '乌鲁木齐', 
            '拉萨', '南宁', '银川'
        ];

        let colors_chart1 = ['#7A67EE','#C1CD59','#228B22','#EEDC82','#3A5FCD']

        var years = ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']

        var data = [];
        // 在初始化图表时添加 sortOrder 变量，初始排序方式为降序
        var sortOrder = 'desc';

        for(let i=0;i < 31; i++){
  
            data.push(AQIdata[cities[i]][0]);
        }

        console.log(data);

        option = {
            toolbox: {
                left: '85%',  // 控制 toolbox 在容器中的水平位置，可以设置为 'left', 'center', 'right'

                feature: {
                    mySort: {
                        show: true,
                        title: '切换排序', // 按钮的标题
                        icon: 'path://M512 320l192 192H320zM512 832l-192-192h384z', // 你可以使用其他图标
                        onclick: function () {
                            // 在这里实现排序方式的切换逻辑
                            // 可以使用变量保存排序方式状态，并在点击时进行切换
                            // 然后根据当前排序方式重新排序并更新图表

                            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                            option.toolbox.iconStyle.borderColor = sortOrder === 'asc' ? '#00d88f' : '#FF9100';
                            // 更新图表
                            myChart.setOption(option, true);
                            updateChart(sortOrder);
                            updateChart(sortOrder);
                        }
                    }
                },
                iconStyle: {
                    
                    borderColor: '#FF9100' // 按钮边框颜色
                }
            },
            color:colors_chart1[1],
            grid: {
                top: '20%',    // 设置上边距为容器高度的10%
                bottom: '0%',  // 设置下边距为容器高度的10%
                left: '15%',   // 设置左边距为容器宽度的10%
     
            },
        xAxis: {
            max: 'dataMax',
           

        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#FF9100'  // 设置 y 轴线的颜色
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#3366CC'  // 设置 y 轴标签的颜色
                }
            },
            type: 'category',
            data: cities,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 8 // only the largest 3 bars will be displayed
        },
        series: [
            {
            realtimeSort: true,
            name: '省会城市年AQI排名',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            },
            barWidth: 3
            }
        ],
        legend: {
            show: true,
            textStyle: {
                color: '#ffffff',  // 图例文本颜色
                fontSize: 15,
            },
            x: '27%',           // 设置图例水平居中
            y: '5%',
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
        };
        function run() {
            loop_index = loop_index % 10;
            for(let j=0;j < 31; ++j){
  
                data[j] = AQIdata[cities[j]][loop_index];
            }
            loop_index ++;

            var indices = Array.from(data.keys());

            // 根据 data 数组的值和排序方式对索引进行排序
            indices.sort(function(a, b) {
                return sortOrder === 'asc' ? data[a] - data[b] : data[b] - data[a];
            });

            temp_data = []
            temp_cities = []
            for(let s = 0;s < 31;s++){
                temp_data.push(data[indices[s]])
                temp_cities.push(cities[indices[s]])           }
            
       
            myChart.setOption({
                color: colors_chart1[loop_index%4],
                series: [
                {
                    realtimeSort: true,
                    type: 'bar',
                    data:temp_data,
                    name: years[loop_index-1]+'年平均AQI排名',
                    barGap: '100%', // 可根据需要调整
                    barCategoryGap: '50%' // 可根据需要调整
                }
                ],
                yAxis: {
                    type: 'category',
                    data: temp_cities,
                    inverse: true,
                    animationDuration: 300,
                    animationDurationUpdate: 300,
                    max: 8 // only the largest 3 bars will be displayed
                },
            });
        }
        setTimeout(function () {
            run();
        }, 5000);
        setInterval(function () {
            run();
        }, 8000);

        option && myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });

        // 在图表的点击事件中调用 updateChart 函数
        myChart.on('click', 'mySort', function () {
            updateChart(sortOrder === 'asc' ? 'desc' : 'asc');
        });

}


function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        var citySelector = document.getElementById('citySelector3');

        // 监听下拉列表变化事件
        citySelector.addEventListener('change', function () {
            // 获取选中的城市
            let selectedCity = citySelector.value;
          
            // 在图表中添加新线
            changeChart(selectedCity);
        });

        function getColorForCategory(categoryIndex) {
            // 返回对应类别的颜色
            const colors = ['#3AA10E', '#FFCC66', '#FF6E1A', '#FF2F2F', '#800202','#3B1543'];
            return colors[categoryIndex];
        }

        function changeChart(selectedCity){

         

            let newdata = resultByCity[selectedCity];

            init_chart(newdata);


        }

        var rawData = resultByCity['上海']

       function init_chart(data){
            var option;
            
            let rawData = data;
            // There should not be negative values in rawData
            console.log(rawData)
            const totalData = [];
            for (let i = 0; i < rawData[0].length; ++i) {
            let sum = 0;
            for (let j = 0; j < rawData.length; ++j) {
                sum += rawData[j][i];
            }
            totalData.push(sum);
            }
            console.log(totalData)
            const grid = {
            left: "10%",
            right:'5%',
            top: "15%",
            bottom:"12%"
            };
            const series = [
            '优',
            '良',
            '轻度污染',
            '中度污染',
            '重度污染',
            ].map((name, sid) => {
            return {
                name,
                type: 'bar',
                stack: 'total',
                barWidth: '60%',
                label: {
                show: true,
                textStyle: {
                    fontSize: 8  // 设置字体大小为12px
                    // 其他字体样式配置...
                },
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
                },
                itemStyle: {
                    color: getColorForCategory(sid)  // 调用函数获取颜色
                },
                data: rawData[sid].map((d, did) =>
                totalData[did] <= 0 ? 0 : d / totalData[did]
                )
            };
            });
            option = {
            legend: {
                selectedMode: false,
                itemWidth: 10,    // 设置图例项的宽度
                itemHeight: 10, 
                x:"10%",
                y:"0%",
                textStyle: {
                    fontSize: 14,  // 设置字体大小为12px
                    color:'##CD6600'
                    // 其他字体样式配置...
                },
            },
            grid,
            yAxis: {
                type: 'value',
                data: [0.2,0.4,0.6,0.8,1],
                
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#2156E8'  // 蓝色
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CED41F'  // 设置 x 轴颜色
                        }
                    }
                }
                
            },
            xAxis: {
                type: 'category',
                data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#CED41F'  // 蓝色
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#CED41F'  // 设置 x 轴颜色
                        }
                    }
                }
               },
 
            series
            };
            
            option && myChart.setOption(option);
            
        
            window.addEventListener("resize",function(){
                myChart.resize();
            });
       }

       init_chart(rawData);
    }

	
function echarts_4() {

    // 获取下拉列表元素
var myChart = echarts.init(document.getElementById('echart4'));
var citySelector = document.getElementById('citySelector');

// 监听下拉列表变化事件
citySelector.addEventListener('change', function () {
    // 获取选中的城市
    let selectedCity = citySelector.value;
    console.log(selectedCity)
    // 在图表中添加新线
    addNewLine(selectedCity,0);
});

var citySelector2 = document.getElementById('citySelector2');

citySelector2.addEventListener('change',function(){
    // 获取选中的城市
    let selectedCity2 = citySelector2.value;
    
    // 在图表中添加新线
    addNewLine(selectedCity2,1);
})

// 添加新线的函数
function addNewLine(city,index) {
    // 根据城市数据添加新的系列
    let newData = generateDataForCity(city);
    // 获取原有的配置
    let option = myChart.getOption();

    colors = ['#00d887','#fff887']
    // legend: {
    //     top:'0%',
    //     data:['上海','北京'],
    //             textStyle: {
    //        color: 'rgba(255,255,255,.5)',
	// 		fontSize:'12',
    //     }
    let citylists = option.legend[0].data;;

    
    
    citylists[index] = city;
    
    option.legend = {
        top:'0%',
        data:citylists,
         textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize:'12',
        }
    }

    // 修改第一个 series 的数据
    option.series[index] = {

        
            name: city,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                
                normal: {
                    color: colors[index],
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 216, 135, 0.4)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 216, 135, 0.1)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                }
            },
                itemStyle: {
                normal: {
                    color: colors[index],
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12
                }
            },
            data: newData
    
        }

    // 通过 setOption 应用新的配置
    myChart.setOption(option);



}


// 生成指定城市的模拟数据
function generateDataForCity(city) {
    // 根据城市生成相应的数据，你可以根据实际情况进行修改
    // ...
    return AQIdata[city];
}

    // 基于准备好的dom，初始化echarts实例
  
    

    option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
		    legend: {
        top:'0%',
        data:['上海','北京'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    grid: {
        left: '10',
		top: '30',
        right: '10',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.2)'
			}

        },

   data: ['2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:12,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '上海',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#00d887',
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 132, 213, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 132, 213, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#00d887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: AQIdata['上海']

    }, 
    {
        name: '北京',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#fff887',
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#fff887',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: AQIdata['北京']

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function echarts_31() {
       // 基于准备好的dom，初始化echarts实例
       var myChart = echarts.init(document.getElementById('fb1'));

       var yearSelector = document.getElementById('yearSelector');

       // 监听下拉列表变化事件
       yearSelector.addEventListener('change', function () {
           // 获取选中的城市
           let selectedyear = yearSelector.value;
         
           // 在图表中添加新线
           init_chart(selectedyear)
       
       });

        const colors = ['#3AA10E', '#FFCC66', '#FF6E1A', '#FF2F2F', '#800202'];







       function init_chart(year){

           let resultData = [];
           for(let i = 0; i<5;i++){
               let name_t;
               if(i == 0){
                   name_t = '优'
               }
               else if(i ==1){
                   name_t = '良'
               }
               else if(i ==2){
                   name_t = '轻度污染'
               }
               else if(i ==3){
                   name_t = '中度污染'
               }
               else if(i ==4){
                   name_t = '重度污染'
               }
               resultData.push({value:pieData[year][i],name:name_t})
           }
           // 为每一项设置不同的颜色
           resultData.forEach((item, index) => {
               item.itemStyle = {
                   color: colors[index],
               };
           });

           var option;
           
           option = {
           tooltip: {
               trigger: 'item'
           },

           legend: {
            orient: 'horizontal',  // 横向排放
            textStyle: {
                fontSize: 14,
                color: '#',
            },
            itemHeight: 10,
            itemWidth: 10,
            // 设置图例组件不受图表大小的影响
         
            width: '100%',
            left: '5%',
            top: '0%',  // 调整 top 属性使其在图表之外
        },
           series: [
               {
               name: '年均空气质量等级:城市数',
               type: 'pie',
               radius: ['40%', '70%'],
               avoidLabelOverlap: false,
               itemStyle: {
                   borderRadius: 10,
                   borderColor: '#fff',
                   borderWidth: 2
               },
               label: {
                   show: false,
                   position: 'center'
               },
               emphasis: {
                   label: {
                   show: true,
                   fontSize: 20,
                   fontWeight: 'bold'
                   }
               },
               labelLine: {
                   show: false
               },
               data:resultData
               }
           ]
           };
       
       
           // 使用刚指定的配置项和数据显示图表。
           myChart.setOption(option);
           window.addEventListener("resize",function(){
               myChart.resize();
           });
       }
   init_chart('2023');
   
}

    
	
})



		
		
		


		









