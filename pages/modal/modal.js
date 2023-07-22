Page({
  onLoad: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户单击确定')
        }
        if(res.cancel){

        }
      }
    })
  }
})
