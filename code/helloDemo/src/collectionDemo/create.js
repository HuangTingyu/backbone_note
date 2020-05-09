var dlrb = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var dlrbCollection = Backbone.Collection.extend({
    model:dlrb
})
var dlrbModels = [
    {
        name:"高雯",
        drama:"克拉恋人",
        score:80
    },
    {
        name:"唐楠楠",
        drama:"傲娇与偏见",
        score:70
    },
    {
        name:"凤九",
        drama:"十里桃花",
        score:90
    }
]
var dlrbList = new dlrbCollection (dlrbModels)
for (var i = 0; i < dlrbList.models.length; i++){
    console.log(dlrbList.models[i].toJSON())
}