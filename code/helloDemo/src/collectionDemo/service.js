var model = Backbone.Model.extend({
    defaults:{
        title:"",
        query:"",
        data:[]
    }
})

var collection = Backbone.Collection.extend({
    initialize : function () {
        console.log("触发")
        this.on("reset", function (render) {
            for (var i = 0; i < render.models.length; i++){
                console.log(render.models[i].toJSON())
            }
        })
    },
    model: model,
    url:"http://localhost:3000/collectionGet"
})

var dlrbList = new collection ()
dlrbList.fetch({
    reset: true,
    success: function (collection, resp, options) {
        for (var i = 0; i < collection.models.length; i++) {
            console.log(collection.models[i].toJSON())
        }
    }
})

