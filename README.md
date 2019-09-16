# backbone_note
backbone.js学习笔记

### 几个重要的概念

Model，Collection，View，Router

Model是数据，Collection是Model的一个集合，View是对Model和Collection中数据的集中展示，把数据渲染到页面上，Router是对路由的处理。

界面上的操作引起model中属性的变化时，model中属性变化时，会重新渲染新的数据到界面。

### demo解析

1.model部分

```js
World = Backbone.Model.extend({
     //创建一个World的对象，拥有name属性
     name: null
});
```

2.collection部分，给每一个world对象，绑定一个add事件，add事件具体定义，见 `addOneWorld` 方法。

```js
Worlds = Backbone.Collection.extend({
       //World对象的集合
       initialize: function(models, options) {
            this.bind("add", options.view.addOneWorld);
   }
});
```

addOneWorld的定义，在View部分

```js
AppView = Backbone.View.extend({
                addOneWorld: function(model) {
                    $("#world-list").append("<li>这里是来自 <b>" + model.get('name') + "</b> 星球的问候：hello world！</li>");
                }
            });
```

3.view部分，进入页面的时候，先初始化一个worlds集合。

```js
AppView = Backbone.View.extend({
                el: $("body"),
                initialize: function() { //构造函数，实例化一个World集合类
                    //并且以字典方式传入AppView的对象
                    this.worlds = new Worlds(null, {
                        view: this
                    })
                },
```

然后，

```js
AppView = Backbone.View.extend({
                el: $("body"),
                events: { //事件绑定，绑定Dom中id为check的元素
                    "click #check": "checkIn",
                },
                checkIn: function() {
                    var world_name = prompt("请问，您是哪星人?");
                    if (world_name == "") world_name = '未知';
                    var world = new World({
                        name: world_name
                    });
                    this.worlds.add(world);
                },
            }); //实例化AppView
            var appview = new AppView;
```

这里面的，

```js
var world = new World({ name: world_name });
```



### 