var render = require('./art/viewDemo.art')
require('../../css/viewDemo.css')
var view = Backbone.View.extend({
    el: $('#root'),
    initialize: function () {
        this.render()
    },
    render: function () {
        this.$el.append(render())
    }
})
var dlrbv = new view ()