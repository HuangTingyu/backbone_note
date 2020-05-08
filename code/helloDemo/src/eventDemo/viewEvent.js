var render = require('./viewEvent.art')
var html = render()
$('body').append(html)

var InfoView = Backbone.View.extend({
    el:'#view',
    events: {
        'click .btn' : 'showInfo'
    },
    ShowInfo: function () {
        $('.viewport')
    }
})
