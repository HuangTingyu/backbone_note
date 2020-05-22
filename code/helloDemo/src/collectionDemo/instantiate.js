var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    }
})
var collection = Backbone.Collection.extend({
    model:model
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
    },{
        name:"周放",
        drama:"爱情高级定制",
        score:88
    }
]
var newModels = [
    {
        name:"凌凌七",
        drama:"一千零一夜",
        score:75
    },
    {
        name:"关小迪",
        drama:"麻辣变形计",
        score:80
    },{
        name:"李慧珍",
        drama:"漂亮的李慧珍",
        score:85
    }
]
var dlrbList = new collection (dlrbModels)
// dlrbList.shift()
// dlrbList.remove(dlrbList.models[2])
// dlrbList.pop()
dlrbList.unshift(newModels[0])
dlrbList.add (newModels[0], { at : 2 })
dlrbList.push(newModels[0])
for(var i = 0; i < dlrbList.models.length; i++){
    console.log(dlrbList.models[i].toJSON())
}