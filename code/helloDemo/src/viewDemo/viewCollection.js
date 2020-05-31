var dlrbModels = [
    {
        code: 6058496,
        name:"高雯",
        drama:"克拉恋人",
        score:80
    },
    {
        code: 6857276,
        name:"唐楠楠",
        drama:"傲娇与偏见",
        score:70
    },
    {            
        code: 6488862,
        name:"凤九",
        drama:"十里桃花",
        score:90
    },{
        code: 11743112,
        name:"周放",
        drama:"爱情高级定制",
        score:80
    },
]
var model = Backbone.Model.extend({
    defaults:{
        code:"",
        name:"",
        drama:"",
        score:""
    },
    idAttribute:"code"
})
var collection = Backbone.Collection.extend({
    model:model
})
var dlrbList = new collection (dlrbModels)
var view = Backbone.View.extend({
    el: '#root',
    render: function () {
        var list = this.collection.models
        for ( var i = 0; i < list.length; i++) {
            this.el.innerHTML += (JSON.stringify(list[i]) + "</br>")
        }
    }
})
var dlrbView = new view({ collection: dlrbList })
dlrbView.render()