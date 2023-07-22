Page({
  onLoad: function () {
    //开始监听罗盘数据
    wx.startCompass();

    //监听罗盘数据变化
    wx.onCompassChange(function (res) {
      console.log("面对的方向度数=" + res.direction)
    })

    //取消监听罗盘数据变化
    wx.offCompassChange(function (res) {
      console.log(res);
    });

    //停止监听罗盘数据
    wx.stopCompass()
  }
})
