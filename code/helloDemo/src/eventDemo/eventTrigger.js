var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"女",
        score:80,
        age:27
    }
})
var man = new person()
man.on("change_age", function(){
    console.log("trigger")
})
man.on("change:age", function (model, value){
    if (value != undefined){
        console.log("age change for " + value)
    } else {
        console.log("trigger")
    }
})
// man.trigger("change_age")
// man.trigger("change:age")
// man.set("age", 28)