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