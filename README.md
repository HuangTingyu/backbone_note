# backbone_note
backbone.js学习笔记

### 几个重要的概念

Model，Collection，View，Router

Model是数据，Collection是Model的一个集合，View是对Model和Collection中数据的集中展示，把数据渲染到页面上，Router是对路由的处理。

把数据当作Models，通过Models创建数据，进行数据验证，销毁或保存到服务器上。

界面上的操作引起model中属性的变化时，model中属性变化时，会重新渲染新的数据到界面。