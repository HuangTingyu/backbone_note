var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"女",
        score:80,
        age:27
    }
})
var man = new person()
man.once("change", function(){
    console.log("事件触发")
})
// man.set("age",28)
// man.set("age",29)
