// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // ============分割线=================
  // ***********路由跳转****************
  // **********************************
  // 跳转折叠面板
  jumpToFold() {
    wx.navigateTo({
      url: './../istarFold/istarFold',
    })
  },
  // 跳转底部固定面板
  jumpToBottom() {
    wx.navigateTo({
      url: './../istarBottom/istarBottom',
    })
  },
  // 跳转通告面板
  /** */

  jumpToNotify() {
    wx.navigateTo({
      url: './../istarNotify/istarNotify',
    })
  },
  /**
   * 跳转进度条面板
   * @param {*} options 
   */
  jumpToProcess() {
    wx.navigateTo({
      url: '/pages/istarProcess/istarProcess',
    })

  },
  /**
     * 跳转打开pdf
     */
  jumpToPDF() {
    wx.navigateTo({
      url: '/pages/istarPDF/istarPDF',
    })

  },
  /**
   * markdown 测试
   * @param {*} options 
   */
  jumpMD(){
    wx.navigateTo({
      url: '/pages/istarMD/istarMD',
    })
  },
  // ===========分割线============
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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