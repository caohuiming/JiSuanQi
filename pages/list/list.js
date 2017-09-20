//获取应用实例
// var app = getApp()
Page({
  data: {
   myLogs:[],
   myList:[1,2,3],
   myListString:["a","b","c"]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var logs = wx.getStorageSync('callogs');
    this.setData({ 'myLogs': logs});
    this.setData({'myList':[11,21,31]});
    this.setData({ 'myListString': ["a1", "b1", "c1"] });
    console.log(this.myLogs);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})