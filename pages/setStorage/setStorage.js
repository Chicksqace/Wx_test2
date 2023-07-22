// Page({
//   onLoad: function () {
//     var user = this.getUserInfo();
//     console.log(user);
//     wx.setStorage({
//       key: 'user',
//       data: user,
//       success: function (res) {
//         console.log(res);
//       }
//     })

//   },
//   getUserInfo: function () {
//     var user = new Object();
//     user.name = 'xiaogang';
//     user.sex = '男';
//     user.age = 30;
//     user.address = '北京市';
//     return user;
//   }
// })


Page({
   onLoad:function(){
     var userSync = this.getUserInfo();
     //同步方式将数据存储到本地
     wx.setStorageSync('userSync', userSync)
   },
   getUserInfo:function(){
     var user = new Object();
     user.name = 'xiaogang';
     user.sex = '男';
     user.age = 30;
     user.address='北京市';
     return user;
   }
})