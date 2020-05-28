require('../../css/viewBasis.css')
// var testview = Backbone.View.extend({
//     id: 'show',
//     className: 'show',
//     render: function (content) {
//         this.el.innerHTML = content
//         document.body.appendChild(this.el)
//     }
// })
var testview = Backbone.View.extend({
    el: "#root",
    className: 'show',
    render: function (content) {
        this.el.innerHTML = content
    }
})
var test = new testview ()
test.render("迪丽热巴0603生日快乐")