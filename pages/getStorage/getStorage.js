// Page({
//   onLoad: function () {
//     //异步方式获取本地数据
//     wx.getStorage({
//       key: 'user',
//       success: function (res) {
//         console.log(res);
//       }
//     })
//   }
// })


// Page({
//   onLoad: function () {
//     //同步方式获取本地数据
//     var userSync = wx.getStorageSync('userSync');
//     console.log(userSync);
//   }
// })

// Page({
//   onLoad: function () {
//     wx.getStorageInfo({
//       success: function (res) {
//         console.log(res);
//       }
//     })
//   }
// })

Page({
  onLoad: function () {
    var storage = wx.getStorageInfoSync();
    console.log(storage);
  }
})

