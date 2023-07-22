Page({
  onLoad: function () {
    wx.compressImage({
      src: '/images/goods/1555850845474.jpg', // 图片路径
      quality: 80, // 压缩质量
      complete: function (res) {
        console.log(res);
        var tempPath = res.tempFilePath;
        console.log(tempPath);
      }
    })
  }
})
