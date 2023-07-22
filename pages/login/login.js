App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        var code = res.code; //用户登录凭证
        if (code) {
          console.log('获取用户登录凭证:' + code);
        } else {
          console.log('获取用户登录凭证失败');
        }
      }
    })
  }
})
