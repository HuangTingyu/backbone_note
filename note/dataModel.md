## Backbone数据模型

### 创建模型对象

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

