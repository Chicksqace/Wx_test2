Page({
  onLoad: function () {
    wx.getSavedFileList({
      success: function (res) {
        var fileList = res.fileList;
        console.log(fileList)
        for (var i = 0; i < fileList.length; i++) {
          var file = fileList[i];
          console.log("第" + (i + 1) + "个文件:");
          console.log("文件创建时间=" + file.createTime);
          console.log("文件大小=" + file.size);
          console.log("文件本地路径=" + file.filePath);
        }
      }
    })
  }
})
