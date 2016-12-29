//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    systemInfo: {},
    userInfo: {},
    invitations: {}
  },
  
  //事件处理函数
  invitationClick: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //数据处理
  loadData: function() {
    var that = this
    
    that.setData({
      invitations: app.backendData.Invitation.index()
    })
  },


  onLoad: function (options) {
    var that = this

    //调用应用实例的方法获取系统数据
    app.getSystemInfo(function(res) {
      that.setData({
        systemInfo: res
      })
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    //拉去服务器数据
    that.loadData()
  }
})
