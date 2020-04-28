var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"",
        score:80,
        age:27
    }
})
var man = new person()
man.on("change",function(){
    console.log("默认值change")
})
man.on("change:sex",function(model, value){
    console.log("默认值change" + value)
})
man.on("change:name",function(model, value){
    console.log("默认值change" + value)
})

// man.set("name", "迪丽热巴")
// man.set("sex", "女")

man.on("change:score", function(model,value){
    var oldscore = model.previous("score")
    if (value > oldscore){
        console.log("Congratulation! You make great progress.")
    }
})

man.on("change:age", function (model, value){
    var objAttr = model.previousAttributes()
    var oldage = objAttr.age
    if (value > oldage){
        console.log(objAttr)
        console.log("Happy birthday to you!")
    }
})
man.set("score", 90)
man.set("age", 28)