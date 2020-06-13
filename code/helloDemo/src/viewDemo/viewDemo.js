var render = require('./art/viewDemo.art')
var renderTab = require('./art/viewDemoTab.art')
require('../../css/viewDemo.css')

var model = Backbone.Model.extend({
    defaults:{
        code:"",
        name:"",
        drama:"",
        score:""
    },
    idAttribute:"code"
})
var collection = Backbone.Collection.extend({
    model:model,
    initialize: function (model, options) {
        this.on('add', options.view.showModel)
    }
})

var view = Backbone.View.extend({
    el: $('#root'),
    initialize: function () {
        this.render()
        this.list = new collection(null, { view: this })
    },
    events: {
        'click #btn': 'addModel'
    },
    render: function () {
        this.$el.append(render())
    },
    addModel: function () {
        var dlrbM = new model ({
            code: $('.code').val(),
            name: $('.name').val(),
            drama: $('.drama').val(),
            score: $('score').val()
        })
        this.list.add(dlrbM)
    },
    showModel: function (model) {
        console.log(model)
        $('.table').append(renderTab(model.toJSON()))
    }
})

var dlrbV = new view ()