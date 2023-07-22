// Page({
//   onLoad: function () {
//     wx.getSystemInfo({
//       success: function (res) {
//         console.log("手机型号=" + res.model)
//         console.log("设备像素比=" + res.pixelRatio)
//         console.log("窗口宽度=" + res.windowWidth)
//         console.log("窗口高度=" + res.windowHeight)
//         console.log("微信设置的语言=" + res.language)
//         console.log("微信版本号=" + res.version)
//         console.log("操作系统版本=" + res.system)
//         console.log("客户端平台=" + res.platform)
//       }
//     })
//   }
// })

Page({
  onLoad: function () {
    try {
      var res = wx.getSystemInfoSync()
      console.log("手机型号=" + res.model)
      console.log("设备像素比=" + res.pixelRatio)
      console.log("窗口宽度=" + res.windowWidth)
      console.log("窗口高度=" + res.windowHeight)
      console.log("微信设置的语言=" + res.language)
      console.log("微信版本号=" + res.version)
      console.log("操作系统版本=" + res.system)
      console.log("客户端平台=" + res.platform)
    } catch (e) {
      // Do something when catch error
    }
  }
})
