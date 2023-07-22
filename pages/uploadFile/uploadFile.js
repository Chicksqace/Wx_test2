Page({
  onLoad: function () {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        //创建uploadTask对象
        const uploadTask = wx.uploadFile({
          url: 'https://api.mofun365.com:8888/api/banner/wxUploadFile',
          filePath: tempFilePaths[0],
          name: 'file',
          header: {
            'content-type': 'Application/json'
          },
          formData: {
            imgName: '我是图片名称',
            imgSize: '122kb',
            position: 'wx' //自定义文件存放的文件夹
          },
          success: function (res) {
            console.log(res);
          }
        });
        //监听 HTTP Response Header 事件
        uploadTask.onHeadersReceived(function (res) {
          console.log("-----------监听 HTTP Response Header 事件-------------");
          console.log(res);
        });
        //取消监听 HTTP Response Header 事件
        uploadTask.offHeadersReceived(function () {
          console.log("-----------取消监听 HTTP Response Header--------------");
        });
        //监听上传进度变化事件
        uploadTask.onProgressUpdate(function (res) {
          console.log("-----------监听上传进度变化事件-------------");
          console.log(res);
        });
        //取消监听上传进度变化事件
        uploadTask.offProgressUpdate(function () {
          console.log("-----------取消监听上传进度变化事件--------------");
        });
        //中断请求任务
        //uploadTask.abort();
      }
    })
  }
})
