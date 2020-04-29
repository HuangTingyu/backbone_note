## backbone事件绑定

## Model模块事件绑定

### on方法

Obj.on(eventName,function,[context])

#### 默认事件、属性事件

例子 ——

```js
var person = Backbone.Model.extend({
    defaults:{
        name:"",
        sex:""
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

man.set("name", "迪丽热巴")
man.set("sex", "女")

// 输出
// 默认值change迪丽热巴
// 默认值change
// 默认值change女
// 默认值change
```

此处，对象man绑定了两个事件，默认事件 `man.on("change"` 和属性事件 `man.on("change:sex"`

属性变化的回调函数中，参数 `value` 获取最新修改后的属性值。

#### 获取修改前属性值

model.previous("attrName") 返回修改前的属性。

model.previousAttributes() 返回修改前的对象。

```js
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

// 输出
// Congratulation! You make great progress.
// 默认值change
// {name: "迪丽热巴", sex: "女", score: 90, age: 27}
// Happy birthday to you!
// 默认值change
```

### 绑定多个事件

例子 ——

```js
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
```

调用模型对象man的on方法，绑定哈希型对象objEvent，从而完成对象多事件的绑定。

调用模型对象man的set方法，重置对象的age和score两个属性值

### once

Obj.once(eventName,function,[context])

once绑定的事件，只能执行一次。

### trigger

Obj.trigger(eventName)

trigger 可以手动触发事件，包括自定义事件。

```js
var man = new person()
// 自定义事件
man.on("change_age", function(){
    console.log("trigger")
})
man.on("change:age", function (model, value){
    if (value != undefined){
        console.log("age change for" + value)
    } else {
        console.log("trigger")
    }
})
man.trigger("change_age")
man.trigger("change:age")
man.set("age", 28)

// 输出
// trigger
// trigger
// age change for 28
```

### off

Obj.off(eventName,function,[context])

off 解绑事件

obj.off() 不传入参数时，解绑所有事件。

例子 1——

```js
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

// 解绑A事件
man.off("eventA")
man.trigger(objEvent)
// 解绑哈希对象中所有事件
man.off(objEvent)
man.trigger(objEvent)

// 输出
// B函数执行次数 1
```

上面的代码用obj.off() 改写

```js
man.off()
man.trigger(objEvent)
// 没有输出
```

### listenTo

Obj1.listenTo(Obj2, EventName, function)

参数Obj1、Obj2都为对象。

例子 ——

```js
var man = new person ()
var obj = _.extend({}, Backbone.Events)
obj.listenTo(man, "change:age", function(model, value){
    var oldage = model.previous("age")
    var now = model.get("age")
    if (oldage != now) {
        console.log("age " + oldage + " 已更改为 " + now)
    }
})
man.set("age", 28)
```

### listenToOnce

Obj1.listenToOnce(Obj2, EventName, function)

事件只触发一次

### stopListening

Obj1.stopListening(Obj2, EventName, function)

停止监听事件

用法1 —— 

停止监听 `change:age`

```
obj.stopListening(man, "change:age")
```

用法2 ——

停止监听所有事件

```
obj.stopListening()
```

### all

Obj.on("all", function)

触发所有绑定事件

## View模块事件绑定

