Page({
  data: {
    msg: '',
    sendMsg: [],
    socketOpen: false,
    resData: []
  },
  createConn: function () {
    var page = this;
    wx.connectSocket({
      url: 'wss://api.mofun365.com:8888/api/socketServer',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'Application/json'
      },
      method: "GET"
    });
    wx.onSocketOpen(function (res) {
      console.log(res);
      page.setData({ socketOpen: true });
      console.log('WebSocket连接已打开！')
    });
    wx.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！')
    })
  },
  send: function (e) {
    if (this.data.socketOpen) {
      console.log(this.data.socketOpen);
      wx.sendSocketMessage({
        data: this.data.msg
      });
      var sendMsg = this.data.sendMsg;
      sendMsg.push(this.data.msg);
      this.setData({ sendMsg: sendMsg });
      var page = this;
      wx.onSocketMessage(function (res) {
        var resData = page.data.resData;
        resData.push(res.data);
        page.setData({ resData: resData });
        console.log(resData);
        console.log('收到服务器内容：' + res.data)
      })
    } else {
      console.log('WebSocket连接打开失败，请检查！');
    }
  },
  closeConn: function (e) {
    wx.closeSocket();
    wx.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！')
    });
  },
  getMsg: function (e) {
    var page = this;
    page.setData({ msg: e.detail.value });
  }
})
