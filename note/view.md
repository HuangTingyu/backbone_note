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

### 模板

`helloDemo\src\viewDemo\art\viewArt.art`

```html
{{ if score > 80 }}
    <div>优秀</div>
 {{else}}
    <div>及格</div>
{{/if}
```

`helloDemo\src\viewDemo\viewArt.js`

```js
var render = require('./art/viewArt.art')
var view = Backbone.View.extend({
    el: $("#root"),
    initialize: function () {
        console.log('init')
    },
    render: function (score) {
        this.$el.html(render({score: score}))
    }
})

var dlrbView = new view ()
dlrbView.render(80)
```

页面显示 - 及格

### 事件绑定

`helloDemo\src\viewDemo\art\viewEvent.art`

```html
<div class="wrap">
    <div id='box'>迪丽热巴0603生日快乐</div>
    <button class="btn btn_a">切换样式</button>
    <button class="btn btn_b">取消绑定</button>
    <button class="btn btn_c">重新绑定</button>

</div>

```

`helloDemo\src\viewDemo\viewEvent.js`

```js
require('../../css/viewBasis.css')
var html = require('./art/viewEvent.art')
var dlrbv = null
var self = null
var view = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
        this.render()
    },
    render: function () {
        this.$el.append(html())
    },
    events: {
        'click div#box' : 'togcls',
        'click button.btn_a': 'tog',
        'click button.btn_b': 'unbind',
        'click button.btn_c': 'rebind'
    },
    togcls: function () {
        $("#box").toggleClass("changed")
    },
    tog: function () {
        $("#box").toggle()
    },
    unbind: function () {
        console.log("取消绑定")
        this.undelegateEvents()
        self = this
        $('.btn_c').on('click', this.rebind)
    },
    rebind: function () {
        console.log("重新绑定")
        self.delegateEvents(this.events)
    }
})
dlrbv = new view ()
```

页面显示 -

出现三个按钮，点击按钮A，文字消失，再点击出现。

点击按钮B，解绑所有事件。

点击按钮C，重新绑定所有事件。

