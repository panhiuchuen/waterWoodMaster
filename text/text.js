

Page({
  data: {
    text: '',
  },
  extraLine: [],
   onLoad: function(option){
    console.log(option.date,option.newOldDate,option.time,option.gender)
    this.extraLine.push(option.date,option.newOldDate,option.time,        option.gender)
  this.setData({
      text: this.extraLine.join('\n'),
  } )
  },

  
  reCaculate: function(e) {
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
