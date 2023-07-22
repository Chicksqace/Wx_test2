Page({
  onLoad: function () {
    wx.getImageInfo({
      src: 'https://api.mofun365.com:8888/images/goods/1555850845474.jpg',
      success: function (res) {
        console.log("图片宽度=" + res.width);
        console.log("图片高度=" + res.height);
        console.log("图片返回路径=" + res.path);
        console.log("图片格式=" + res.type);
        console.log("拍照时设备方向=" + res.orientation);
      }
    })
  }
})
