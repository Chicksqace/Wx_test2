// Page({
//   onLoad: function () {
//     //异步移除key=user数据
//     wx.removeStorage({
//       key: 'user',
//       success: function (res) {
//         console.log(res);
//       },
//     })
//   }
// })


// Page({
//   onLoad: function () {
//     //同步移除key=userSync数据
//     wx.removeStorageSync('userSync');
//   }
// })


Page({
  onLoad: function () {
    try {
      //异步清理缓存数据
      wx.clearStorage();
      //同步清理缓存数据
      wx.clearStorageSync();
    } catch (e) {

    }
  }
})

