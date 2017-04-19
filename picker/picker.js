Page({
  data: {
    array: ['农历', '新历'],
    index: 0,
    date: '2016-09-01',
    time: '12:01'
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

  calulateData : function( e ){
    wx.navigateTo({
      url: '../text/text',
      success: function(res){
        // success
        console.log(res)
      },
      fail: function(res) {
        // fail
        console.log(res)
      },
      complete: function(res) {
        // complete
        console.log(res)
      }
    })
  }

})
