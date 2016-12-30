//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    invitations: {},
    showInvitationDetail: false,
    acception: {
      user: {
        name: "",
        avatar: ""
      },
      mono: "",
      time: "",
      location: "",
      restaurant: {
        name: ""
      },
      foodType: "",
      maxSumOfPeople: "",
      attendances: [
      ]
    }
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
    
    app.backendData.Invitations.list.call(this)
  },


  onLoad: function (options) {
    var that = this
    wx.showNavigationBarLoading()

    //拉去服务器数据
    that.loadData()
    wx.hideNavigationBarLoading()
  },

  onPullDownRefresh: function() {
    var that = this
    that.setData({
      userInfo: {},
      invitations: {},
      showInvitationDetail: false,
      acception: {
        user: {
          name: "",
          avatar: ""
        },
        mono: "",
        time: "",
        location: "",
        restaurant: {
          name: ""
        },
        foodType: "",
        maxSumOfPeople: "",
        attendances: [
        ]
      }
    })
    this.onLoad()
  }
})
