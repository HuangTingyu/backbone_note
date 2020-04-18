var dlrb = {
    name:"迪丽热巴",
    info:"一只默默热爱表演的小透明",
    weibo:"Dear-迪丽热巴"
}

var keysArr = _.keys(dlrb)
var valuesArr = _.values(dlrb)

// console.log(keysArr, valuesArr)

// console.log(_.pick(dlrb,'name','info'))
// console.log(_.omit(dlrb,'weibo'))

if (_.has(dlrb, 'weibo')){
    console.log('迪丽热巴的微博——@' + dlrb.weibo)
} else {
    console.log('dd88没有微博')
}