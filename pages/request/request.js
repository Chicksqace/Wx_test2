// Page({
//   onLoad: function () {
//     wx.request({
//       url: 'https://api.mofun365.com:8888/api/address/getAddressList',
//       data: {
//         provinceId: '3'
//       },
//       method: 'GET',
//       success: function (res) {
//         console.log(res);
//       },
//       fail: function () {
//         // fail
//       },
//       complete: function () {
//         // complete
//       }
//     });
//   }
// })

 
Page({
  onLoad: function () {
    var requestTask = wx.request({
      url: 'https://api.mofun365.com:8888/api/address/getAddressList',
      data: {
        provinceId: '3'
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
      }
    });
    //监听 HTTP Response Header 事件
    requestTask.onHeadersReceived(function (res) {
      console.log("-----------监听 HTTP Response Header 事件-------------");
      console.log(res);
    });
    //取消监听 HTTP Response Header 事件
    requestTask.offHeadersReceived(function () {
      console.log("-----------取消监听 HTTP Response Header--------------");
    });
    //中断请求任务
    //requestTask.abort();
  }
})

