Page({
  handler: function (e) {
    var that = this;
    if (!e.detail.authSetting['scope.userLocation']) {
      //打开设置界面
    }
  },
  settingBtn: function () {
    wx.openSetting();
  }
})


// Page({
//   onLoad: function () {
//     //可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
//     wx.getSetting({
//       success(res) {
//         if (!res.authSetting['scope.record']) {
//           wx.authorize({
//             scope: 'scope.record',
//             success() {
//               // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
//               wx.startRecord()
//             }
//           })
//         }
//       }
//     });
//   }
// })
