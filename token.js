const _0x2305e8 = _0x73ee;

function _0x3a89() {
    const _0x5afe49 = ['1048PejBHN', '25ecFwIe', '540852WSOnfd', 'getFullYear', '7vwlbdd', 'getHours', '8238112QWoFGj', '227272VDBVqE', '2773776ClSdVU', 'exports', '6243wYPXtY', '973368xUuUuY', '21699RFubPM', 'getMonth', '1120AzJZjd', 'undefined', '407fyZBQu'];
    _0x3a89 = function () {
        return _0x5afe49;
    }
    ;
    return _0x3a89();
}

(function (_0x5d3c3d, _0x4a5efc) {
    const _0x563e0e = _0x73ee
        , _0x3b1241 = _0x5d3c3d();
    while (!![]) {
        try {
            const _0x42c351 = -parseInt(_0x563e0e(0x120)) / 0x1 + -parseInt(_0x563e0e(0x12a)) / 0x2 * (parseInt(_0x563e0e(0x123)) / 0x3) + -parseInt(_0x563e0e(0x12c)) / 0x4 * (-parseInt(_0x563e0e(0x12b)) / 0x5) + -parseInt(_0x563e0e(0x121)) / 0x6 * (parseInt(_0x563e0e(0x11d)) / 0x7) + -parseInt(_0x563e0e(0x11f)) / 0x8 + -parseInt(_0x563e0e(0x125)) / 0x9 * (parseInt(_0x563e0e(0x127)) / 0xa) + parseInt(_0x563e0e(0x129)) / 0xb * (parseInt(_0x563e0e(0x124)) / 0xc);
            if (_0x42c351 === _0x4a5efc)
                break;
            else
                _0x3b1241['push'](_0x3b1241['shift']());
        } catch (_0x3cfabf) {
            _0x3b1241['push'](_0x3b1241['shift']());
        }
    }
}(_0x3a89, 0x91de3));

function generateToken() {
    const _0x5ae9ce = _0x73ee
        , _0x4466c1 = new Date()
        , _0x1c8f8b = _0x4466c1[_0x5ae9ce(0x12d)]()
        , _0x560a0e = _0x4466c1[_0x5ae9ce(0x126)]() + 0x1
        , _0x33090a = _0x4466c1['getDate']()
        , _0x50064c = _0x4466c1[_0x5ae9ce(0x11e)]()
        , _0x1a2d43 = _0x4466c1['getMinutes']()
        , _0x2e48f2 = _0x1c8f8b * (_0x560a0e + _0x33090a) + _0x33090a * _0x50064c * _0x1a2d43;

      // 打印当前北京时间
    console.log(`当前北京时间: ${_0x1c8f8b}-${_0x560a0e}-${_0x33090a} ${_0x50064c}:${_0x1a2d43}`);
    return _0x2e48f2;
}

function generateToken2() {
    const date = new Date();

    // 获取当前UTC时间的小时数
    const utcHours = date.getUTCHours();

    // 北京时间比UTC早8小时，调整时区
    const beijingOffset = 8; // 东八区
    const beijingHours = utcHours + beijingOffset;

    // 构造一个代表北京时间的日期对象
    const beijingDate = new Date(date.setUTCHours(beijingHours));

    // 获取北京时间的各个时间组件
    const year = beijingDate.getFullYear();
    const month = beijingDate.getMonth() + 1; // 月份从0开始，因此要加1
    const day = beijingDate.getDate();
    const hours = beijingDate.getHours();
    const minutes = beijingDate.getMinutes();

    // 生成token
    const token = year * (month + day) + day * hours * minutes;

    // 打印当前北京时间
    console.log(`当前北京时间: ${year}-${month}-${day} ${hours}:${minutes}`);

    return token;
}

console.log(generateToken());

function _0x73ee(_0x4cde98, _0x2fb127) {
    const _0x3a898a = _0x3a89();
    return _0x73ee = function (_0x73eebe, _0x21ae67) {
        _0x73eebe = _0x73eebe - 0x11d;
        let _0x336e65 = _0x3a898a[_0x73eebe];
        return _0x336e65;
    }
        ,
        _0x73ee(_0x4cde98, _0x2fb127);
}

typeof module !== _0x2305e8(0x128) && module[_0x2305e8(0x122)] && (module[_0x2305e8(0x122)] = {
    'generateToken': generateToken
});


console.log(generateToken())

const axios = require('axios'); // 导入 axios

function submitData(user, password, step, url) {
    // 生成请求体的数据
    const data = {
        user: user,
        password: password,
        step: step,
        // token: 22980
        token: generateToken2()
    };

    console.log(JSON.stringify(data, null, 2));

    const options = {


        headers: {
            // 'Accept': '*/*',
            // 'Accept-Encoding': 'gzip, deflate, br, zstd',
            // 'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            // 'Connection': 'keep-alive',
            // 'Content-Length': new URLSearchParams(data).toString().length.toString(),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            // 'Cookie': 'Hm_lvt_9ad64a4661baaf77df1b73d0bbf28dce=1759299340; HMACCOUNT=DA0014670805A8F2; Hm_lpvt_9ad64a4661baaf77df1b73d0bbf28dce=1759299780; _d_id=c1ef0ac022c440e430c0efbf782ecf',
            // 'Host': 'bs.yanwan.store',
            'Origin': 'https://bs.yanwan.store',
            'Referer': 'https://bs.yanwan.store/run4/',
            'Access-Control-Allow-Origin': 'https://bs.yanwan.store',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Origin, Accept, Referer'
            // 'Sec-CH-UA': '"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"',
            // 'Sec-CH-UA-Mobile': '?0',
            // 'Sec-CH-UA-Platform': '"Windows"',
            // 'Sec-Fetch-Dest': 'empty',
            // 'Sec-Fetch-Mode': 'cors',
            // 'Sec-Fetch-Site': 'same-origin',
            // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0',
            // 'X-Requested-With': 'XMLHttpRequest'
        }
    };

    // 使用 axios 发送 POST 请求
    console.log('提交中...');
    axios.post(url, new URLSearchParams(data).toString(), options)
        .then(response => {
            console.log("请求结果: ", JSON.stringify(response.data, null, 2));
        })
        .catch(error => {
            console.error('请求失败: ', error);
        })
        .finally(() => {
            console.log('结束');
            console.log('======================================');
        });
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWeeklyRandom() {
    const currentDay = new Date().getDay(); // 0 是星期天，1 是星期一，..., 6 是星期六

    let min, max;

    switch (currentDay) {
        case 0: // 星期天
            min = 5000;
            max = 10000;
            break;
        case 6: // 星期六
            min = 6000;
            max = 10000;
            break;
        default: // 周一到周五
            min = 8000;
            max = 12000;
            break;
    }

    return getRandomNumber(min, max);
}

submitData('1096168060@qq.com', 'yuelaizheng123', 360, "https://bs.yanwan.store/run4/mi20241029.php");
// submitData('1096168060@qq.com', 'yuelaizheng123', generateWeeklyRandom(), "https://bs.yanwan.store/run4/mi20241029.php");