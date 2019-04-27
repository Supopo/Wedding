//index.js
//获取应用实例
const app = getApp()
var server = app.globalData.server;
var appid = app.globalData.appid;

Page({
  data: {
    userInfo: {},
    slideList: [{
        image: 'https://hbimg.huabanimg.com/aa2d76b3aef1ad75e4ef2ca8ea792dd648f5d27119b6d-fsZ3GH_fw658'
      },
      {
        image: 'https://hbimg.huabanimg.com/ada88c8d66f889ca4617534909c55be39c6cde8bdea4-jZR5qv_fw658'
      },
      {
        image: 'https://hbimg.huabanimg.com/10ec200cb967c7e924c17918bb11f5f2454cc940162ad-P1qq0T_fw658'
      }
    ]
  },
  onLoad: function() {
    var that = this

    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    // wx.request({
    //   url: server,
    //   method: 'GET',
    //   data: {
    //     'c': 'info',
    //     'appid': appid
    //   },
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function(res) {

    //     wx.hideLoading();
    //     that.setData({
    //       slideList: res.data.slideList
    //     });
    //   }
    // })
    wx.hideLoading();

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  onShareAppMessage: function(res) {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function(res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function(res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },
  previewImage: function(e) {
    var imgsurl = []
    var imgObj = this.data.slideList
    for (var i = 0; i < imgObj.length; i++) {
      imgsurl[i] = imgObj[i]['image']
    }
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imgsurl // 需要预览的图片http链接列表
    })
  },
})