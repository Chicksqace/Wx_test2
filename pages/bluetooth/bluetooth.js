Page({
  onLoad: function () {
    wx.openBluetoothAdapter({  //初始化蓝牙功能
      success: function (res) {
        console.log(res)
      }
    })
    wx.closeBluetoothAdapter({  //关闭蓝牙功能
      success: function (res) {
        console.log(res)
      }
    })
    wx.onBluetoothAdapterStateChange(function (res) {  //监听蓝牙状态
      console.log(`adapterState changed, now is`, res)
    })
    wx.getBluetoothAdapterState({ //获取蓝牙状态
      complete: function (res) {
        console.log(res)
      }
    })
  }
})



// Page({
//   onLoad: function () {
//     wx.startBluetoothDevicesDiscovery({
//       services: ['FEE7'],
//       success: function (res) {
//         console.log(res)
//       }
//     })
//     wx.stopBluetoothDevicesDiscovery({
//       success: function (res) {
//         console.log(res)
//       }
//     })
//   }
// })
 


// Page({
//   onLoad: function () {
//     function ab2hex(buffer) {
//       var hexArr = Array.prototype.map.call(
//         new Uint8Array(buffer),
//         function (bit) {
//           return ('00' + bit.toString(16)).slice(-2)
//         }
//       )
//       return hexArr.join('');
//     }
//     wx.getBluetoothDevices({
//       success: function (res) {
//         console.log(res)
//         if (res.devices[0]) {
//           console.log(ab2hex(res.devices[0].advertisData))
//         }
//       }
//     })
//     wx.getConnectedBluetoothDevices({
//       success: function (res) {
//         console.log(res)
//       }
//     })
//     wx.onBluetoothDeviceFound(function (devices) {
//       console.log('new device list has founded')
//       console.dir(devices)
//       console.log(ab2hex(devices[0].advertisData))
//     })
//   }
// })



// Page({
//   onLoad: function () {
//     wx.createBLEConnection({ //连接低功耗蓝牙设备
//       // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
//       deviceId: 'deviceId',
//       success: function (res) {
//         console.log(res)
//       }
//     })
//     wx.closeBLEConnection({ //断开与低功耗蓝牙设备的连接
//       deviceId: 'deviceId',
//       success: function (res) {
//         console.log(res)
//       }
//     })
//     wx.notifyBLECharacteristicValueChange({ //启用低功耗蓝牙设备特征值变化
//       state: true, // 启用 notify 功能
//       // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接  
//       deviceId: deviceId,
//       // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
//       serviceId: serviceId,
//       // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
//       characteristicId: characteristicId,
//       success: function (res) {
//         console.log('notifyBLECharacteristicValueChange success', res.errMsg)
//       }
//     })
//     wx.onBLEConnectionStateChange(function (res) { //监听低功耗蓝牙连接状态的改变事件
//       // 该方法回调中可以用于处理连接意外断开等异常情况
//       console.log(`device ${res.deviceId} state has changed, connected: ${res.connected}`)
//     })
//     function ab2hex(buffer) {
//       var hexArr = Array.prototype.map.call(
//         new Uint8Array(buffer),
//         function (bit) {
//           return ('00' + bit.toString(16)).slice(-2)
//         }
//       )
//       return hexArr.join('');
//     }
//     wx.onBLECharacteristicValueChange(function (res) { //监听低功耗蓝牙设备的特征值变化
//       console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`)
//       console.log(ab2hext(res.value))
//     })
//   }
// })



// Page({
//   onLoad: function () {
//     wx.getBLEDeviceServices({
//       // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
//       deviceId: deviceId,
//       success: function (res) {
//         console.log('device services:', res.services)
//       }
//     })
//     wx.getBLEDeviceCharacteristics({
//       // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
//       deviceId: deviceId,
//       // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
//       serviceId: serviceId,
//       success: function (res) {
//         console.log('device getBLEDeviceCharacteristics:', res.characteristics)
//       }
//     })
//   }
// })
