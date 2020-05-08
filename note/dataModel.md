## Backbone数据模型

## 创建模型对象

```js
var man = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
    }
})
var dlrb = new man ()
// 输出
// 您new了一个对象
```

`initialize` 是构造函数，创建对象的时候自动执行。

### set、get、escape

set赋值，get获取值

```js
var man = Backbone.Model.extend({
    initialize: function(){
        console.log('您new了一个对象')
    },
    defaults:{
        name:"",
        birthday:"",
        business:""
    }
})
var dlrb = new man ()
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
var man = Backbone.Model.extend({
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
var dlrb = new man ()
dlrb.set({
    name:"迪丽热巴·迪力木拉提",
    birthday:"19920603",
    business:"<嘉行传媒>"
})

dlrb.printLog()
```

### 监听数据

```js
var man = Backbone.Model.extend({
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
var dlrb = new man ()
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
var man = Backbone.Model.extend({
    defaults:{
        name:"",
        birthday:"",
        business:""
    }
})
var dlrb = new man ({
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

### 开启数据验证

```js
var man = Backbone.Model.extend({
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
var dlrb = new man ({
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

