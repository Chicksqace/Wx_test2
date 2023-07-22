Page({
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    //获取当前地图中心的经纬度
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    //将地图中心移置当前定位点
    this.mapCtx.moveToLocation()
  }
})
