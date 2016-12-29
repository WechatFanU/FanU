var config = require('../config.js'),
    message = require('../component/message/message')

var Invitations = {
  list: function() {
    var that = this
    message.hide.call(that)
    wx.request({
      url: config.url + '/invitations',
      method: 'GET',
      header: {
        "Content-Type": "application/json,application/json"
      },
      success: function(res){
        console.log(res)
        that.setData({
          showLoading: false,
          invitations: res.data
        })
        wx.stopPullDownRefresh()
        typeof cb == 'function' && cb(res.data)
      },
      fail: function() {
        that.setData({
          showLoading: false
        })
        message.show.call(that,{
          content: '呀！掉线了',
          icon: 'offline',
          duration: 3000
        })
        wx.stopPullDownRefresh()
        typeof fail_cb == 'function' && fail_cb()
      }
    })
  }
}



module.exports = {
  Invitations: Invitations
}