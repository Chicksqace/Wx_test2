Page({
  onLoad: function () {
    wx.getSavedFileList({
      success: function (res) {
        var fileList = res.fileList;
        console.log(fileList)
        var file = fileList[0];
        wx.getSavedFileInfo({
          filePath: file.filePath,
          success: function (res) {
            console.log("文件创建时间=" + res.createTime);
            console.log("文件大小=" + res.size);
            console.log("文件本地路径=" + res.errMsg);
          }
        })
      }
    })
  }
})
