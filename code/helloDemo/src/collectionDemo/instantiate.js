var model = Backbone.Model.extend({
    defaults:{
        name:"",
        drama:"",
        score:""
    },
    idAttribute:"code"
})
var collection = Backbone.Collection.extend({
    model:model
})
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
// dlrbList.unshift(newModels[0])
// dlrbList.add (newModels[0], { at : 2 })
// dlrbList.push(newModels[0])
// for(var i = 0; i < dlrbList.models.length; i++){
//     console.log(dlrbList.models[i].toJSON())
// }
var findIdModel = dlrbList.get(11743112)
// console.log(findIdModel.toJSON())
var findIndexModel = dlrbList.at(0)
// console.log(findIndexModel.toJSON())
var find0Model = dlrbList.findWhere({ score : 80 })
var find1Model = dlrbList.where({ score : 80 }, true)
var find2Model = dlrbList.where({ score : 80 })
// console.log( find0Model.toJSON() )
// console.log( find1Model.toJSON() )
// for( var i = 0; i < find2Model.length; i++ ){
    // console.log( find2Model[i].toJSON() )
// }