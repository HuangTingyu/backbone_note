var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:"女",
        score:80,
        age:27
    }
})
var man = new person()
var m = 0, n = 0
var callbackA = function () {
    m++
    console.log("A函数运行次数 " + m )
}

var callbackB = function () {
    n++
    console.log("B函数执行次数 " + n)
}
var objEvent = {
    "eventA" : callbackA,
    "eventB" : callbackB
}
man.on(objEvent)

// man.off("eventA")
// man.trigger(objEvent)
// man.off(objEvent)
// man.trigger(objEvent)

man.off()
man.trigger(objEvent)
