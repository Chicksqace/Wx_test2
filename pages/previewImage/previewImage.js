Page({
  onLoad: function () {
    wx.previewImage({
      current: 'https://api.mofun365.com:8888/images/goods/1555850845474.jpg', // 当前显示图片的http链接
      urls: [
        "https://api.mofun365.com:8888/images/goods/1555850845474.jpg",
        "https://api.mofun365.com:8888/images/goods/1555851154057.jpg",
        "https://api.mofun365.com:8888/images/goods/1555851345937.jpg"
      ] // 需要预览的图片http链接列表
    })
  }
})
