require('../../scss/viewEvent.css')
var render = require('./viewEvent.art')
var html = render()
$('#root').after(html)

var InfoView = Backbone.View.extend({
    el:'#view',
    events: {
        'click .btn' : 'showInfo'
    },
    ShowInfo: function () {
        $('.viewport')
    }
})
