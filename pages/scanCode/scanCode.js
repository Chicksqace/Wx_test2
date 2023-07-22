Page({
  onLoad:function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }
})