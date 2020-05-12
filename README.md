## backbone特点

#### 1.继承特性

通过backbone不仅可以，以面向对象的方式编写自己的数据，集合，视图模型，而且这些模型都具有可继承性。这使得开发人员可以方便的重载这些模型和扩展一些一些自定义的属性和方法。

#### 2.事件统一管理

```
events:{
  'click #btnAdd' : 'btnAdd_Click'
}
```

上述代码中，“events" 为事件声明，”click"表示元素绑定的事件名称，“#btnAdd" 表示页面中共ID为 ”btnAdd"的元素，“btnAdd_Click" 表示事件触发时所执行的函数名称。

#### 3.绑定页面模板

Backbone可以直接调用页面中的HTML模板，这样的好处，一是可以在HTML模板中嵌入js代码，无需在动态生成HTML元素时拼接字符串，而是可以在视图中管理页面中的模板，定义多套HTML页面模板。

#### 4.自动同步服务端

backbone内部，有一整套与服务器数据自动同步的机制，通过这套机制，用户只需关注客户端的操作，执行完操作后数据会在模型类中自动同步到服务器。

### 一个简单的例子

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>hello</title>
</head>
<body>
    <div id="divTip"></div>
    <script src="asset/jquery-3.4.1.min.js"></script>
    <script src="asset/underscore.js"></script>
    <script src="asset/backbone.js"></script>
    <script>
        $(function(){
            // 定义模型类
            window.Test = Backbone.Model.extend({
                defaults:{
                    content:''
                }
            })
            // 创建集合模式类
            window.TestList = Backbone.Collection.extend({
                model:Test
            })
            // 向模型添加数据
            var data = new TestList({
                content:'hello,backbone'
            })
            // 创建View对象
            window.TestView = Backbone.View.extend({
                el:$("body"),
                initialize:function(){
                    $('#divTip').html(data.models[0].get("content"))
                }
            })
            // 实例化View对象
            window.App = new TestView

        })
    </script>
</body>
</html>
```

定义模型的顺序 —— 

1. 模型类(Backbone.Model.extend) Test

   使用 ` defaults` 方式设置模型实例化时，将复制默认数据 ”content"。 通常，默认数据为空，实例化模型时，才真正被实参取代。

2. 集合类 (Backbone.Collection.extend) TestList

   该集合类继承了模型类 Test。

   `var data = new TestList` 实例化一个集合类对象 data。

3. 视图类(Backbone.View.extend) TestView

    `initialize` 函数，通过get方式获取集合对象data中content数据项的值.

4. 实例化`View` 类，即 `window.App = new TestView` 

   执行上述代码，View类中的initialize函数将被自动执行。

5. 执行结果

 `hello,backbone` 被填充到 `<div id="divTip"></div>` 中。

### Underscore简单练习

详细见 —— `note\Underscore`

### backbone事件方法

详细见 —— `note\eventBind`



