require('../../css/viewEvent.css')
var render = require('./viewEvent.art')
var html = render()
$('#root').after(html)

var InfoView = Backbone.View.extend({
    el:'#view',
    events: {
        'click .btnHide' : 'hideInfo',
        'click .btnShow' : 'showInfo'
    },
    showInfo: function () {
        $('.viewport').show()
    },
    hideInfo: function () {
        $('.viewport').hide()
    }
})
var view = new InfoView()
