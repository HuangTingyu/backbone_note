var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"",
        score:80,
        age:27
    }
})
var man = new person()
var objEvent = {
    "change:score": score_change,
    "change:age": age_change
}
man.on(objEvent)
function score_change (model, value){
    var oldscore = model.previous("score")
    if (value > oldscore){
        console.log("Congratulation! Your score is "+ value +".")
    }
}
function age_change (model, value){
    var objAttr = model.previousAttributes()
    var oldage = objAttr.age
    if (value > oldage){
        console.log("Happy "+ value +"th birthday to you!")
    }
}
man.set({"age":28, "score": 90})