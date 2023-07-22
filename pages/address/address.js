Page({
  onLoad: function () {
    wx.chooseAddress({
      complete(res) {
        console.log(res)
        console.log("收货人姓名userName=" + res.userName)
        console.log("邮编postalCode=" + res.postalCode)
        console.log("国标收货地址第一级地址provinceName=" + res.provinceName)
        console.log("国标收货地址第二级地址cityName=" + res.cityName)
        console.log("国标收货地址第三级地址countyName=" + res.countyName)
        console.log("详细收货地址信息detailInfo=" + res.detailInfo)
        console.log("收货地址国家码nationalCode=" + res.nationalCode)
        console.log("收货人手机号码telnumber=" + res.telnumber)
      }
    })
  }
})
