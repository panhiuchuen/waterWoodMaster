Page({
  data: {
    newOldDate : 'oldDate',
    gender : 'female',
    date: '2016-09-01',
    time: '12:01',

    itemsDate: [
      {name: 'newDate', value: '新历'},
      {name: 'oldDate', value: '农历', checked: 'true'},
    ],
    itemsGender: [
      {name: 'male', value: '男性'},
      {name: 'female', value: '女性', checked: 'true'},
    ]

  },
radioGenderChange:function(e){
  this.setData({
    gender:e.detail.value
  })
},
radioNewOldDateChange:function(e){
  this.setData({
    newOldDate:e.detail.value
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
      url: '../text/text?newOldDate='+this.data.newOldDate +'&date='+ this.data.date +'&time='+this.data.time+'&gender='+this.data.gender,
      success: function(res){
        // success
        //console.log(res)
      },
      fail: function(res) {
        // fail
       // console.log(res)
      },
      complete: function(res) {
        // complete
        console.log(res)
      }
    })
  }

})
