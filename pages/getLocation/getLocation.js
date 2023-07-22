Page({
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude;
        console.log("纬度=" + latitude);
        var longitude = res.longitude;
        console.log("经度=" + longitude);
        var speed = res.speed;
        console.log("速度=" + speed);
        var accuracy = res.accuracy;
        console.log("精确度=" + accuracy);
        var altitude = res.altitude;
        console.log("高度=" + altitude);
        var verticalAccuracy = res.verticalAccuracy;
        console.log("垂直精度=" + verticalAccuracy);
        var horizontalAccuracy = res.horizontalAccuracy;
        console.log("水平精度=" + horizontalAccuracy);
      }
    })
  }
})
