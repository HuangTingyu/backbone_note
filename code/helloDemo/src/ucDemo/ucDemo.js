// underscore对象
var data = {
    name:"Dear-迪丽热巴",
    Info:"一只默默热爱表演的小透明"
}

var ucObject = _(data)
console.log(ucObject.value().name + "," + ucObject.value().Info)

var arr = [92,6,3]
var ucObjectArr = _(arr)
console.log("max:" + ucObjectArr.max() + ";min:"+ ucObjectArr.min())