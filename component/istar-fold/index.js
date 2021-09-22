// component/istar-fold/index.js

/**
 * 需要传参内容：
 * label ： 折叠面板标题 目前为居中显示
 * options : 折叠面板展开内容  options中可传两个参数，text:文本 value：值
 * options示例:[{text:'文本',value:10},
 * 暴露的方法：
 *     toggle : 可打印e.detail获取展开关闭状态
 *     handleOptions ：事件点击函数，返回点击下标值
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    label:{
      type:String,
      value:'label'
    },
    options: {
      type: Array,
      value: []
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    classType: 'T',
    isfull: false,
    mediumNum: 0,
    isShow: false, //展开开关
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /********************
       * ******************
       * ******数据处理*****
       *******************/
      toggle(e) {
      let _this = this;
      _this.setData({
        mediumNum: 1
      })
      _this.setData({
        isShow: !this.data.isShow,
        isfull: !this.data.isfull,
      })
       // 保存展开关闭事件，暴露出去
      e= e.target.dataset
      this.triggerEvent("toggle",e)
    },
    // toggle(e){
    //  
      
    // },
    // 关闭面板
    hideLine() {
      // this.openLineContent()
      let _this = this;
      _this.setData({
        isShow: !this.data.isShow,
        isfull: !this.data.isfull,
      })
    },
    handleOptions(e) {
      var e = e.target.dataset.index
      this.triggerEvent("handleOptions",e)
      // 关闭面板
      let _this = this;
      // this.openLineContent()
      _this.setData({
        isShow: !this.data.isShow,
        isfull: !this.data.isfull,
      })
    },
  
    /***************** */
  }
})
