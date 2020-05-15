var modelGetService = Backbone.Model.extend({
    initialize: function () {
        console.log('initialize')
    },
    url:"http://localhost:3000/modelGet?uid=920603&name=迪丽热巴"
})
// var modelInst = new modelGetService ()
// modelInst.fetch({
//     success: function (model, response) {
//         console.log('3000 modelGet response')
//         console.log(modelInst.toJSON())
//     },
//     error: function (err) {
//         console.error(err)
//     }
// })

var modelPostService = Backbone.Model.extend({
    initialize: function () {
        console.log('initialize')
    },
    defaults: {
        uid: '',
        name: '',
    },
    url:"http://localhost:3000/modelPost"
})
var modelPostInst = new modelPostService ()
modelPostInst.save({
    uid: '920603',
    name: '迪丽热巴·迪力木拉提'
}, {
    success: function (model, response) {
        console.log('response',response)
        console.log(model.toJSON())
    }
})

