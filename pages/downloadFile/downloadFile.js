Page({
  data: {
    src: ''
  },
  onLoad: function () {
    var page = this;
    const downloadTask = wx.downloadFile({
      url: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
      type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
      success: function (res) {
        console.log(res);
        var tempPath = res.tempFilePath;
        page.setData({ src: tempPath });
      }
    })

    //监听 HTTP Response Header 事件
    downloadTask.onHeadersReceived(function (res) {
      console.log("-----------监听 HTTP Response Header 事件-------------");
      console.log(res);
    });
    //取消监听 HTTP Response Header 事件
    downloadTask.offHeadersReceived(function () {
      console.log("-----------取消监听 HTTP Response Header--------------");
    });
    //监听下载进度变化事件
    downloadTask.onProgressUpdate(function (res) {
      console.log("-----------监听下载进度变化事件-------------");
      console.log(res);
    });
    //取消监听下载进度变化事件
    downloadTask.offProgressUpdate(function () {
      console.log("-----------取消监听下载进度变化事件--------------");
    });
    //中断请求任务
    //downloadTask.abort();

  }
})
