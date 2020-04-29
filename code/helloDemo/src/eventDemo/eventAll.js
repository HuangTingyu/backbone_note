var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"",
        score:80,
        age:27
    }
})
var man = new person()
man.on("change:age", function(){
    console.log("触发了 change:age 事件")
})
var event_fun = function () {
    console.log("触发了 change:name 事件")
}
man.on("change:name", event_fun)
man.on("all", function (value){
    console.log("触发了all事件 " + value)
})
// man.set("name", "迪丽热巴")
// man.set("age", 28)