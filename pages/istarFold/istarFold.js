// pages/istarFold/istarFold.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classType:'T',
    mediumNum:0,
    isShow:false, //展开开关
    lineData:[{
      type:'已冲红',
      number:10
    },{
      type:'已打印',
      number:10
    },{
      type:'已下载',
      number:10
    },{
      type:'已报销',
      number:10
    }]
  },

  /********************
   * ******************
   * ******数据处理*****
   *******************/
  openLineContent(){
    let _this = this;
    _this.setData({
      mediumNum:1
    })
    _this.setData({
      isShow:!this.data.isShow,
    })
  },

   /***************** */
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