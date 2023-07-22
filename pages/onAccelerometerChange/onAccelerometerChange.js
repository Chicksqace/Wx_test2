Page({
  onLoad: function () {
    //监听加速度数据事件
    wx.onAccelerometerChange(function (res) {
      console.log(res);
      console.log("X轴=" + res.x)
      console.log("Y轴=" + res.y)
      console.log("Z轴=" + res.z)
    })
    //取消监听加速度数据事件
    wx.offAccelerometerChange(function (res) {
      console.log(res);
    })
  }
})
