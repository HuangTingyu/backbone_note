## 视图

### 创建视图类

#### 添加新视图

```js
var testview = Backbone.View.extend({
    id: 'show',
    className: 'show',
    render: function (content) {
        this.el.innerHTML = content
        document.body.appendChild(this.el)
    }
})
var test = new testview ()
test.render("迪丽热巴0603生日快乐")
```

页面多了一个dom元素

```
<div id="show" class="show">迪丽热巴0603生日快乐</div>
```

#### 操作已有DOM元素

页面HTML结构

```html
<body>
    <div id="root"></div>
</body>
```

往DOM元素中添加文本

```js
var testview = Backbone.View.extend({
    el: "#root",
    className: 'show',
    render: function (content) {
        this.el.innerHTML = content
    }
})
var test = new testview ()
test.render("迪丽热巴0603生日快乐")
```

### 传入collection数据

`new view({ collection: 实例化的collection })`

1.实例化collection

2.定义view

3.将实例化的collection传入

```
var collection = Backbone.Collection.extend({
    model:model
})
var dlrbList = new collection (dlrbModels)
var view = Backbone.View.extend({
    el: '#root',
    render: function () {
        var list = this.collection.models
        for ( var i = 0; i < list.length; i++) {
            this.el.innerHTML += (JSON.stringify(list[i]) + "</br>")
        }
    }
})
var dlrbView = new view({ collection: dlrbList })
dlrbView.render()
```

