Page({
  onLoad: function () {
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型wifi 网络、3g 网络、4g 网络、5g 网络、unknown、none
        var networkType = res.networkType;
        console.log("网络类型=" + networkType);
      }
    })
  }
})
