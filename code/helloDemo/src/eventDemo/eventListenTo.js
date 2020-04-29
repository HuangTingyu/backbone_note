var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"",
        score:80,
        age:27
    }
})
var man = new person ()
var obj = _.extend({}, Backbone.Events)
// obj.listenTo(man, "change:age", function(model, value){
//     var oldage = model.previous("age")
//     var now = model.get("age")
//     if (oldage != now) {
//         console.log("age " + oldage + " 已更改为 " + now)
//     }
// })
// man.set("age", 28)

// listenToOnce
var num = 1
obj.listenToOnce(man, "change:age", function(model, value){
    console.log("事件执行次数 " + num)
    num ++
})
// man.set("age", 28)
// man.set("age", 28)

// stopListening
obj.listenTo(man, "change:name", function(model, value){
    console.log("name已变更为 " + value)
})
obj.listenTo(man, "change:age", function(model, value){
    console.log("age已变更为 " + value)
})
obj.listenTo(man, "change:score", function(model, value){
    console.log("score已变更为 " + value)
})
// obj.stopListening(man, "change:name")
obj.stopListening()
man.set("name", "迪丽热巴")
man.set("age", 28)
man.set("score", 90)