// app.js
App({
    onLaunch: function () {
        //var that = this;wx.qiaker.cnwx692112f4be239c89wx692112f4be239
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            // wx.login({
            //     success: function () {
            //         wx.getUserInfo({
            //             success: function (res) {
            //                 //console.info(res);
            //                 that.globalData.userInfo = res.userInfo;
            //                 typeof cb == "function" && cb(that.globalData.userInfo)
            //             }
            //         })
            //     }
            // });
        }

    },
    onHide: function () {
        wx.pauseBackgroundAudio();
    },
    onShow: function () {
        wx.playBackgroundAudio()
    },
    globalData: {
        userInfo: null,
      appid: 'wx692112f4be239c89',//此处改成您自己的小程序appid
        server: 'https://wx.qiaker.cn/api',
        music_url: ''
    }
});

