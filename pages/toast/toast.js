// Page({
//   onLoad: function () {
//     wx.showToast({
//       title: '成功',
//       icon: 'success',
//       duration: 2000
//     })
//   }
// })



// Page({
//   onLoad: function () {
//     wx.showToast({
//       title: '加载中',
//       icon: 'loading',
//       duration: 2000
//     })
//   }
// })



Page({
  onLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }
})

