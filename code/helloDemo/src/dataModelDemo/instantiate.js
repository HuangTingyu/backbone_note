var model = Backbone.Model.extend({
    initialize: function () {
        this.on('invalid', function (model, error){
            console.log(error)
        })
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    },
    validate: function (attrs) {
        if (!_.isString(attrs.name)) {
            return '姓名必须是字符'
        }
        if(!_.isNumber(attrs.birthday)) {
            return '生日必须是数字'
        }
    }
})
var dlrb = new model ({
    name:"迪丽热巴·迪力木拉提",
    birthday:"920603",
    business:"<嘉行传媒>"
})
// console.log(dlrb.get('name') + '最新动态' + dlrb.get('news'))
// dlrb.set({
//     news: "5月10号极限挑战"
// })
// console.log(dlrb.get('name') + '最新动态' + dlrb.get('news'))
// dlrb.set({
//     name:603,
//     birthday:'dd88'
// }, {"validate":true})
// console.log(dlrb.toJSON())

// 清除business属性
dlrb.unset("business")
console.log(dlrb.get("business"))
console.log(dlrb.toJSON())
// 对比
dlrb.set("business", dlrb.previous("business"))
console.log(dlrb.toJSON())
// 清除全部数据
dlrb.clear()
console.log(dlrb.toJSON())