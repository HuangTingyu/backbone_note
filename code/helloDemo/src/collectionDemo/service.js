var modelGet = Backbone.Model.extend({
    defaults:{
        code:"",
        name:"",
        drama:"",
        score:""
    }
})

var collectionGet = Backbone.Collection.extend({
    initialize : function () {
        console.log('init')
        this.on("reset", function (render) {
            console.log('reset')
            // for (var i = 0; i < render.models.length; i++){
            //     console.log(render.models[i].toJSON())
            // }
        })
    },
    model: modelGet,
    url:"http://localhost:3000/collectionGet"
})

// var dlrbList = new collectionGet ()
// dlrbList.fetch({
//     reset: true,
//     success: function (collection, resp, options) {
//         console.log('success')
//         for (var i = 0; i < collection.models.length; i++) {
//             console.log(collection.models[i].toJSON())
//         }
//     }
// })

var modelPost = Backbone.Model.extend({
    defaults:{
        code:"",
        name:"",
        drama:"",
        score:""
    } 
})

var collectionPost = Backbone.Collection.extend({
    initialize: function () {
        this.on("add",function(model, response, options) {
            console.log('add')
            console.log(model.toJSON())
        })
    },
    model: modelPost,
    url: "http://localhost:3000/collectionPost"
})

var dlrbList = new collectionPost ()
dlrbList.create({
    code:"10001",
    name:"凌凌七",
    drama:"一千零一夜",
    score:75
},{
    wait: true,
    success: function (model, response) {
        console.log('success')
        console.log(model.toJSON())
    }
  })


