// each无返回，map有返回
var arr = [1,2,3,4,5,6]
_.each(arr,function(n){
    if(!(n%2)){
        // console.log(n)
    }
})
// map 不符合条件的将被返回为undefined
var oddArr = _.map(arr,function(n){
        if(!(n%2)){
            return n
        }
})
for(var i = 0; i < oddArr.length; i++){
    if(oddArr[i] != undefined){
        // console.log( i + "->" + oddArr[i])
    }
}
// each 遍历对象
var grObject = {
    "dlrb":"920603",
    "gwg":"830116"
}
_.each(grObject,function(value, key, object){
    // console.log(key + '生日->' + value )
})

// find
var oddFind = _.find(arr, function(n){
    return (!(n % 1 ==0))
})
// console.log(oddFind ? oddFind : 'Not found')

var oddFilter = _.filter(arr, function(n){
    return (!(n % 2 == 0))
})
// console.log(oddFilter)

var maxInList = _.max([60, 40, 80])
// console.log("最大值为：" + maxInList)

var series = [
    {name : '枕上书', score: 6.6},
    {name : '龙岭迷窟', score : 8.2},
    {name : '香蜜', score : 8}
]
var min = _.min(series, function(n){
    return n.score
})
// console.log(min.name + ' ' + min.score)

var sortSeries = _.sortBy(series, function(n){
    return n.score
})
// console.log(sortSeries)
for (var p in sortSeries){
    // console.log(sortSeries[p].name + " " + sortSeries[p].score)
}

var groupSeries = _.groupBy(series, function(n){
    return n.score > 7
})
for(var gt in groupSeries["true"]){
    console.log(groupSeries["true"][gt])
}
