Page({
  onLoad: function () {
    var page = this;
    wx.downloadFile({
      url: "https://api.mofun365.com:8888/images/goods/1555850845474.jpg",
      type: 'image',
      success: function (res) {
        console.log(res);
        var tempPath = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: tempPath,
          success: function (res) {
            console.log(res);
          }
        })
      }
    })
  }
})
