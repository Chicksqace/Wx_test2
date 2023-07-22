Page({
  onLoad:function(){
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })
  }
})