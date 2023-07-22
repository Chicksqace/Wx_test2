Page({
  onLoad: function () {
    wx.showActionSheet({
      itemList: ['语文', '数学', '英语', '化学', '物理', '生物',],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  }
})
