var arr = ['胖迪','凤九','东华','凤九']
var iphone9 = _.indexOf(arr, '凤九')
// console.log(iphone9)

// console.log(_.without([4,6,8,12,4,40],4,40))

var unionArr = _.union([92,6,3],[83,1,16])
// console.log(unionArr)

var delayFun = function(v){
    console.log('我现在正在'+v)
}
// _.delay(delayFun,5000,"coding")

var onceFun = _.once(function(){
    console.log("半生疏离，一世知己")
})
// onceFun()
// onceFun()
// onceFun()

var input = function (n, s){
    return s ? n + "先生" : n + "女士"
}
wrapFun = _.wrap(input, function(input){
    return '你好，' + input("迪丽热巴", 0) 
})
// console.log(wrapFun())

var plusFun = function(n){
    return n * n
}

console.log(_.flow(_.add, plusFun)(2, 3))
 