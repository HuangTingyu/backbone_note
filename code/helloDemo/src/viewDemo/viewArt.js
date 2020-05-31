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