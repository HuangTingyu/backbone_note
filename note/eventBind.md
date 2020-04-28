## backbone事件绑定

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

