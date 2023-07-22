Page({
  onLoad: function () {
    wx.addPhoneContact({
      firstName: '名字',
      nickName: '昵称',
      lastName: '姓氏',
      mobilePhoneNumber: '手机号'
    })
  }
})
