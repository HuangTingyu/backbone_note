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
    {name : '香蜜', score : 8},
    {name : '龙岭迷窟', score : 8.2}
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

