var modelService = Backbone.Model.extend({
    initialize: function () {
        console.log('initialize')
    },
    url:"http://localhost:3000/json"
})
var modelInst = new modelService ()
modelInst.fetch({
    success: function (model, response) {
        console.log(model)
        console.log(response.toJSON())
    },
    error: function (err) {
        console.error(err)
    }
})