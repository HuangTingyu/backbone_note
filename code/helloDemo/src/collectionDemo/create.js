var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var collection = Backbone.Collection.extend({
    model:model,
    filterFun: function () {
        return this.filter(function (model){
            return model.get("score") >= 80
        })
    }
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
var dlrbList = new collection (dlrbModels)
console.log(dlrbList)
// var dlrbList = new Backbone.Collection(dlrbModels, {
    // model:model
// })
var filDlrbList = dlrbList.filterFun()
for (var i = 0; i < filDlrbList.length; i++){
    console.log(filDlrbList[i].toJSON())
}