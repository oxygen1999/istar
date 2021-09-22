// pages/test/fold/fold.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    label:'状态',
    options:[{
      text:'已冲红',
      value:10
    },{
      text:'已打印',
      value:10
    },{
      text:'已下载',
      value:10
    },{
      text:'已报销',
      value:10
    }]
  },
  toggle(e){
    console.log(e.detail)
  },
  handleOptions(e){
    console.log(e.detail)
  },
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