function $(v) {
    if (typeof v === 'function') {
        window.onload = v;
    } else if (typeof v === 'string') {
        return document.getElementById(v);
    } else if (typeof v === 'object') {
        return v;
    }
}

/**
 *  获取目标控件属性值。
 * @param obj 目标控件
 * @param attr 目标控件属性
 * @returns {string} 目标控件属性值
 */
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];

}

/**
 * 移动控件
 * @param obj 目标控件
 * @param attr 目标控件属性
 * @param dir 移动步长
 * @param target 目标位置
 * @param endFn 回调函数
 */
function move(obj, attr, dir, target, endFn) {
    clearInterval(obj.timer);
    dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;
    obj.timer = setInterval(function () {
        var offest = parseInt(getStyle(obj, attr)) + dir;
        if (offest < target && dir < 0 || offest > target && dir > 0) {
            offest = target
        }
        obj.style[attr] = offest + 'px';
        if (offest == target) {
            clearInterval(obj.timer);
            endFn && endFn();
        }
    }, 30)
}

/**
 * 抖动函数的封装
 * @param obj
 * @param attr
 * @param endFn
 */
function shake(obj, attr, endFn) {
    //抖的频率
    var arr = [];
    var num = 0;
    // var pos = parseInt(getStyle(obj, attr));  //这个位置隐患，每次出发都是一个新的位置,怎么处理呢 想办法只调用一次
    if (!obj.pos) {   //第一次没有，赋值  再次出发就不会在进入函数。
        obj.pos = parseInt(getStyle(obj, attr));
    }
    for (let i = 20; i > 0; i -= 2) {
        arr.push(i, -i);
    }
    arr.push(0);
    clearInterval(obj.shake);
    obj.shake = setInterval(function () {
        obj.style[attr] = obj.pos + arr[num] + 'px';
        num++;
        if (num === arr.length) {
            clearInterval(obj.shake);
            endFn && endFn();
        }
    }, 50)
}