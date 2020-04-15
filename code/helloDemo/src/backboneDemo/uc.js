// underscore对象
var data = {
    name:"Dear-迪丽热巴",
    Info:"一只默默热爱表演的小透明"
}

var uc = _(data)
console.log(uc.value().name + "," + uc.value().Info)