Page({
  onLoad: function () {
    wx.setClipboardData({
      data: '我是剪贴板内容',
      complete: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  }
})
