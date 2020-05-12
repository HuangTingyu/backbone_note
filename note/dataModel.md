## Backbone数据模型

### 创建模型对象

```js
var model = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
    }
})
var dlrb = new model ()
// 输出
// 您new了一个对象
```

`initialize` 是构造函数，创建对象的时候自动执行。

### model本质

控制台打印出model，显示model是一个对象

实例化后的数据存在attributes属性中

```js
attributes: {name: "高雯", drama: "克拉恋人", score: 80}
```

model自带的属性方法保存在proto中

```js
__proto___ :
	__proto___:
		on :
		listenTo:
		off:
		......
```

### set、get、escape

set赋值，get获取值

```js
var model = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    }
})
var dlrb = new model ()
dlrb.set({
    name:"迪丽热巴·迪力木拉提",
    birthday:"19920603",
    business:"<嘉行传媒>"
})

console.log(dlrb.get('name') + '的经纪公司' + dlrb.get('business'))
// 输出
// 迪丽热巴·迪力木拉提的经纪公司<嘉行传媒>
```

其中，escape可以html代码转成字符串

```js
console.log(dlrb.escape('name') + '的经纪公司' + dlrb.escape('business'))
// 输出
// 迪丽热巴·迪力木拉提的经纪公司&lt;嘉行传媒&gt;
```

### 自定义模型方法

举例 ——

```js
var model = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    },
    printLog:function(){
        console.log(this.get('name') + '的经纪公司' + this.get('business'))
        console.log(this.escape('name') + '的经纪公司' + this.escape('business'))
    }
})
var dlrb = new model ()
dlrb.set({
    name:"迪丽热巴·迪力木拉提",
    birthday:"19920603",
    business:"<嘉行传媒>"
})

dlrb.printLog()
```

### 监听数据

```js
var model = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
        this.on("change:name", function () {
            var old = this.previous("name")
            var now = this.get("name")
            if (old != now){
                console.log('原值' + old + '变更为' + now)
            }
        })
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    }
})
var dlrb = new model ()
dlrb.set({
    name:"迪丽热巴·迪力木拉提",
    birthday:"19920603",
    business:"<嘉行传媒>"
})
// 输出
// 原值变更为迪丽热巴·迪力木拉提
```

## 模型对象操作

对实例化后的数据模型进行操作

### 赋值

除了用set方法赋值外，也可以在实例化的时候赋值。

没有设置的值为undefined

```js
var model = Backbone.Model.extend({
    defaults:{
        name:"",
        birthday:"",
        business:""
    }
})
var dlrb = new model ({
    name:"迪丽热巴·迪力木拉提",
    birthday:"920603",
    business:"<嘉行传媒>"
})
console.log(dlrb.get('name') + '最新动态' + dlrb.get('news'))
// 输出
// 迪丽热巴·迪力木拉提最新动态undefined
```

### 变更

```js
dlrb.set({
    news: "5月10号极限挑战"
})
console.log(dlrb.get('name') + '最新动态' + dlrb.get('news'))
// 输出
// 迪丽热巴·迪力木拉提最新动态5月10号极限挑战
```

### 获取属性

获取models的属性有两种方法

```
model.toJSON()
```

toJSON返回的是js对象而非JSON字符串！不要被命名误导！

或者

```
model.attributes
```

注意，这两个方法返回的都是JS对象。

### 开启数据验证

```js
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
dlrb.set({
    name:603,
    birthday:'dd88'
}, {"validate":true})
console.log(dlrb.toJSON())
// 输出
// 姓名必须是字符
// {name: "迪丽热巴·迪力木拉提", birthday: "920603", business: "<嘉行传媒>"}
```

调用validate数据验证，需要在set的时候传入 

```
{"validate":true}
```

validate进行数据验证失败时，会终止set操作，直接执行invalid事件中的代码。

### 删除数据

删除属性 `unset`

删除全部数据 `clear`

```js
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
// 输出
// undefined
// {name: "迪丽热巴·迪力木拉提", birthday: "920603"}
// {name: "迪丽热巴·迪力木拉提", birthday: "920603", business: "<嘉行传媒>"}
// {}
```

## Backbone数据模型集合

### 创建数据集合

#### 方法1

首先，定义model，然后定义collection，collection由model组成。

```
var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var collection = Backbone.Collection.extend({
    model:model
})
```

应用 ——

此处的dlrbModels是模型数据。实例collection后，将该模型数据以参数形式传入，此时模型数据转化成模型对象。

```js
var dlrbModels = [
    {
        name:"高雯",
        drama:"克拉恋人",
        score:80
    },
    {
        name:"唐楠楠",
        drama:"傲娇与偏见",
        score:70
    },
    {
        name:"凤九",
        drama:"十里桃花",
        score:90
    }
]
var dlrbList = new collection (dlrbModels)
for (var i = 0; i < dlrbList.models.length; i++){
    console.log(dlrbList.models[i].toJSON())
}
```

#### 方法2

定义collection时，顺便将模型数据 `dlrbModels` 传入进行实例化。

```js
var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var dlrbList = new Backbone.Collection(dlrbModels, {
    model:model
})
for (var i = 0; i < dlrbList.models.length; i++){
    console.log(dlrbList.models[i].toJSON())
}
```

### collection本质

collection本质是一个对象

collection属性models是一个数组，数组中保存了实例化的各种model

```
models: (3) [child, child, child]
```

collection的各种方法保存在proto中

```
__proto___ :
	__proto___:
		on :
		listenTo:
		off:
		......
```

### 定义集合方法

`collection` 可以使用 `underscore`提供的方法！

此处的 `filterFun` 就是自定义的模型方法。

调用集合对象的 `filter` 方法，过滤 score属性大于等于 80 的模型对象，并

```js
var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var collection = Backbone.Collection.extend({
    model:model,
    filterFun: function () {
        return this.filter(function (model){
            return model.get("score") >= 80
        })
    }
})
```

应用 ——

```js
var filDlrbList = dlrbList.filterFun()
for (var i = 0; i < filDlrbList.length; i++){
    console.log(filDlrbList[i].toJSON())
}
```

