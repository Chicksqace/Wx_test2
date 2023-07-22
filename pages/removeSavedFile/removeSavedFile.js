Page({
  onLoad: function () {
    wx.getSavedFileList({
      success: function (res) {
        var fileList = res.fileList;
        console.log(fileList)
        var file = fileList[0];
        wx.removeSavedFile({
          filePath: file.filePath,
          complete: function (res) {
            console.log(res)
          }
        })
      }
    })
  }
})
