Page({
  onLoad: function () {
    wx.getFileInfo({
      filePath: '/images/goods/1555850845474.jpg',//本地文件路径 (本地路径)
      complete: function (res) {
        console.log("文件大小size=" + res.size);
        console.log("文件摘要digest=" + res.digest)
      }
    })
  }
})
