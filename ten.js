//第一题
function findMost(arr) {
    if (!arr.length) return
    if (arr.length === 1) return 1
    let res = {}
    let maxName
    // 遍历数组
    arr.forEach((item) => {
        res[item] ? res[item] += 1 : res[item] = 1
    })
    // 遍历 res
    for (let r in res) {
        if (res[r] > maxNum) {
            maxNum = res[r]
            maxName = r
        }
    }
    return '出现次数最多的元素为:' + maxName
}
//第二题

function getUrlkey(url) {
    var params = {};
    var urls = url.split("?");
    var arr = urls[1].split("&");
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = arr[i].split("=");
        params[a[0]] = a[1];
    }
    return params;
}
//第三题
let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
arr.flat(Infinity)
//第四题
function ts(n) {
    let str = n.toString(),
        len = parseInt(str.length),
        flag = true;
    for (let i = 0; i < len; i++)
        if (str[i] != str[str.length - 1 - i]) flag = false
    return flag
  
}

//第五题
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//第六题
function List(arrArg) {
    this.arr = arrArg || [];
    this.arrlength = this.arr.length || 0;
}
List.prototype = {
    constructor: List,
    add: function (arg) {
        this.arr.push(arg);
        this.arrlength = this.arr.length;
        return this.arr;
    }
}