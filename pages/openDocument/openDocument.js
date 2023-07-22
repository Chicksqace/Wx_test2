Page({
  onLoad: function () {
    wx.downloadFile({
      url: 'http://www.crcc.cn/portals/0/word/应聘材料样本.doc',
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          fileType: 'doc',
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  }
})
