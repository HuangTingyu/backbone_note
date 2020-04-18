## underscore练习

### （重要）underscore对象

使用underscore方法之前，注意！！！

要先把数组或对象转成underscore对象

举例 ——

```js
// underscore对象
var data = {
    name:"Dear-迪丽热巴",
    Info:"一只默默热爱表演的小透明"
}

var ucObject = _(data)
console.log(ucObject.value().name + "," + ucObject.value().Info)
```

### uc函数分类

uc中的函数可以分为以下几类 ——

- 集合（Collections）
- 数组（Arrays）
- 函数（Funtions）
- 对象（Objects）
- 功能（Utility）

### 集合

具体见 —— `code\helloDemo\src\ucDemo\ucCollection.js`

#### 1.each和map

each和map都可以遍历数组和对象。

each无返回结果。

遍历数组

```js
var arr = [1,2,3,4,5,6]
_.each(arr,function(n){
    if(!(n%2)){
        // console.log(n)
    }
})
```

遍历对象

```js
var grObject = {
    "dlrb":"920603",
    "gwg":"830116"
}
_.each(grObject,function(value, key, object){
    return console.log(key + '生日->' + value )
})
```

map迭代完以后，返回新的数组或对象。

以下不符合条件的元素，将被返回为undefined

```js
var arr = _.map(arr,function(n){
        if(!(n%2)){
            return n
        }
})
for(var i = 0; i < arr.length; i++){
    if(arr[i] != undefined){
        // console.log( i + "->" + arr[i])
    }
}
```

#### 2.find和filter

find返回满足条件的元素（按照顺序遍历，只返回一个）

```js
var arr = [1,2,3,4,5,6]
var oddFind = _.find(arr, function(n){
    return (!(n % 2 ==0))
})
console.log(oddFind ? oddFind : 'Not found')
// 返回1
```

filter返回一个数组，由满足条件的元素组成。

```js
var oddFilter = _.filter(arr, function(n){
    return (!(n % 2 == 0))
})
console.log(oddFilter)
// 返回 [1,3,5]
```

#### 3.max和min

可以先处理数组，再根据已处理的数组，返回最大值或最小值。

例1，基本操作

```
var maxInList = _.max([60, 40, 80])
```

例2，通过回调函数处理数组

```js
var series = [
    {name : '枕上书', score: 6.6},
    {name : '龙岭迷窟', score : 8.2},
    {name : '香蜜', score : 8}
]
var min = _.min(series, function(n){
    return n.score
})
console.log(min.name + ' ' + min.score)
// 枕上书 6.6
```

#### 4.sortBy和groupBy

sortBy 返回一个数组。按照迭代器返回的数据，升序排列。

```js
var sortSeries = _.sortBy(series, function(n){
    return n.score
})
// 此处，for...in是遍历数组！sortSeries是升序排序的数组。
for (var p in sortSeries){
    console.log(sortSeries[p].name + " " + sortSeries[p].score)
}
```

输出

```
枕上书 6.6
香蜜 8
龙岭迷窟 8.2
```

groupBy 返回一个对象，对象只有两个key，分别是false和true。false对应一个数组，不满足条件的元素组成。

true对应一个数组，满足条件的元素组成。

```
var groupSeries = _.groupBy(series, function(n){
    return n.score > 7
})
for(var gt in groupSeries["true"]){
    console.log(groupSeries["true"][gt])
}
```

输出

```
{name: "龙岭迷窟", score: 8.2}
{name: "香蜜", score: 8}
```

#### 5.first和last

_.fist(array, n)

n默认是1，返回数组第一个元素。如果传入n，那么返回一个新数组，数组前n项元素组成。

```
var seriesFirst = _.first(series)
console.log(seriesFirst)
// 输出 {name: "枕上书", score: 6.6}
```

_.last(array, n)，返回数组最后一个元素。参数n的作用同上。

### 数组

#### indexOf和lastIndexOf

indexOf（array, value），查找元素首次出现的位置，不存在返回-1。

区别于find，find可以接回调函数，找到满足条件的元素并返回。indexOf主要是，查元素位置。

```
var arr = ['胖迪','凤九','东华','凤九']
var iphone9 = _.indexOf(arr, '凤九')
console.log(iphone9)
// 输出 1
```

lastIndexOf，查找元素最后一次出现的位置，不存在返回-1

#### without

_.without(array, [*value])

返回一个不包含value的数组

```js
console.log(_.without([4,6,8,12,4,40],4,40))
// 输出 [6, 8, 12]
```

#### union

将数组进行合并重组

```js
console.log(_.union([92,6,3],[83,1,16]))
// 输出 [92, 6, 3, 83, 1, 16]
```

### 函数

#### delay

相当于setTimeout，延迟输出。

_.delay(function, wait, [*argument])

```
var delayFun = function(v){
    console.log('我现在正在'+v)
}
_.delay(delayFun,5000,"coding")
```

#### once

once函数仅执行一次，再次执行无效

```
var onceFun = _.once(function(){
    console.log("半生疏离，一世知己")
})
```

#### wrap

将自定义函数作为参数传入

```
var input = function (n, s){
    return s ? n + "先生" : n + "女士"
}
wrapFun = _.wrap(input, function(input){
    return '你好，' + input("迪丽热巴", 0) 
})
console.log(wrapFun())
```

#### flow

组合调用函数，将前一个函数的输出，作为下一个函数的输入。类似管道符。

```
var plusFun = function(n){
    return n * n
}

console.log(_.flow(_.add, plusFun)(2, 3))
```

### 对象

#### keys和values

keys获取由key值组成的数组

values获取由value值组成的数组

```js
var dlrb = {
    name:"迪丽热巴",
    info:"一只默默热爱表演的小透明",
    weibo:"Dear-迪丽热巴"
}

var keysArr = _.keys(dlrb)
var valuesArr = _.values(dlrb)

console.log(keysArr, valuesArr)
// 输出 ["name", "info", "weibo"] 
// 输出  ["迪丽热巴", "一只默默热爱表演的小透明", "Dear-迪丽热巴"]
```

#### pick和omit

挑选和排除对象中的键值，返回一个新对象

```js
console.log(_.pick(dlrb,'name','info'))
console.log(_.omit(dlrb,'weibo'))
// 输出 {name: "迪丽热巴", info: "一只默默热爱表演的小透明"}
```

#### has

_.has(object, key)

返回true或者false，对象中是否包含对应的key值

```
if (_.has(dlrb, 'weibo')){
    console.log('迪丽热巴的微博——@' + dlrb.weibo)
} else {
    console.log('dd88没有微博')
}
```

