Page({
  onLoad: function () {
    wx.getImageInfo({
      src: 'https://api.mofun365.com:8888/images/goods/1555850845474.jpg ',
      success: function (res) {
        var path = res.path;
        console.log("临时文件路径=" + path);
        wx.saveFile({
          tempFilePath: path,
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            console.log("本地文件路径=" + savedFilePath);
          }
        })
      }
    })
  }
})
