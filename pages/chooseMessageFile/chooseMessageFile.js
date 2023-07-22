Page({
  onLoad: function () {
    wx.chooseMessageFile({
      count: 10,
      type: 'image',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles;
        console.log(tempFilePaths);
      }
    })
  }
})
