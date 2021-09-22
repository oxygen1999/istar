// component/istar-noyify/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
  properties: {
    // opeations: {
    //   type: String,
    //   value: 'opeations'
    // },
    // type:{
    //   type:String,
    //   value:'type'
    // },

  },

  /**
   * 组件的初始数据
   */
  data: {
    opeations: {
      title: '公告',
      cancel: '取消',
      confirm: '确定',
      customize: '朕已阅',
      showModal:false
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 展开弹窗
    toggle(e) {
      console.log(this.data.opeations)
      console.log("组件内部toggle")
      let _this = this;
      _this.setData({
        'opeations.showModal': !_this.data.opeations.showModal
      })
      console.log(_this.data.opeations)
      // e= e.target.dataset
      // this.triggerEvent("toggle","e")
    },
    // 遮罩层
    hideModal() {
      let _this = this;
      _this.setData({
        'opeations.showModal': !_this.data.opeations.showModal
      })
    },
    // 确定
    onConfirm() {
      console.log("点击了确定事件");
      this.setData({
        'opeations.showModal': false
      })
      // var e =""
      this.triggerEvent("onConfirm")
    },
    // 取消
    onCancel() {
      console.log("点击了取消事件");
      this.setData({
        'opeations.showModal': false
      })
      this.triggerEvent("onCancel")
    },
    // 自定义
    onCustomize() {
      console.log("自定义按钮")
      this.setData({
        'opeations.showModal': false
      })
      // this.triggerEvent("onCustomize")
      console.log(this.data.opeations.showModal)
    },
  },
  lifetimes: {
    attached: function() {
      
      // 在组件实例进入页面节点树时执行
      console.log("组件渲染开始")
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log("组件渲染结束")
    },
  },
  // attached(){
  //   console.log("组件渲染")
  // },
  
  
})
