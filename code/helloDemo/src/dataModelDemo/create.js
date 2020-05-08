var man = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
        this.on("change:name", function () {
            var old = this.previous("name")
            var now = this.get("name")
            if (old != now){
                console.log('原值' + old + '变更为' + now)
            }
        })
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    },
    printLog:function(){
        console.log(this.get('name') + '的经纪公司' + this.get('business'))
        console.log(this.escape('name') + '的经纪公司' + this.escape('business'))
    }
})
var dlrb = new man ()
dlrb.set({
    name:"迪丽热巴·迪力木拉提",
    birthday:"19920603",
    business:"<嘉行传媒>"
})

dlrb.printLog()

// console.log(dlrb.get('name') + '的经纪公司' + dlrb.get('business'))
// console.log(dlrb.escape('name') + '的经纪公司' + dlrb.escape('business'))