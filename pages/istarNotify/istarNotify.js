// pages/istarNotify/istarNotify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal:false, //遮罩层与弹窗控制器
    type:''
  },
  // 展开弹窗
  openDialog(){
    let _this = this;
    _this.setData({
      showModal:!this.data.showModal
    })
  },
  // 遮罩层
  hideModal(){
    let _this = this;
    _this.setData({
      showModal:!this.data.showModal
    })
  },
  // 确定
  onConfirm(){
    console.log("点击了确定事件");
    this.setData({
      showModal:false
    })
  },
  // 取消
  onCancel(){
    console.log("点击了取消事件");
    this.setData({
      showModal:false
    })
  },
  // 自定义
  onCustomize(){
    console.log("自定义按钮")
    this.setData({
      showModal:false
    })
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