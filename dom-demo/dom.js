// $ 接收一个字符串或元素或元素列表
// 返回一个新数组
// 这个数组有 on addClass removeClass ...等API
// 全局变量的声明(在 node.js 里不允许操作全局变量)
window.$ = function (selectorOrNode) { // 参数可能是三种基本类型所以用 typeof ，如果是对象就用 instanceof
    let array = [] // 先声明一个空数组
    if (typeof selectorOrNode === 'string') { // 如果传的是字符串
        // 找到所有对应的 items 然后放到空数组里
        let items = document.querySelectorAll(selectorOrNode)
        for (var i = 0; i < items.length; i++) {
            array.push(items[i])
        }
    } else if (selectorOrNode instanceof Element) { // 如果传的是元素就 push 到里面（学会区分 Node 和 Element）
        array.push(selectorOrNode)
    } else if (selectorOrNode instanceof Array) {
        for (var i = 0; i < selectorOrNode.length; i++) {
            if (!(selectorOrNode[i] instanceof Element)) {
                continue
            }
            array.push(selectorOrNode[i])
        } // 封装新数组
    }

    // 👇以下是赋值
    // 在返回 array 之前添加方法.on 这个函数接收两个参数（事件类型，回调），一旦执行on就会遍历array里面所有元素，并添加对应的回调
    array.on = function (eventType, fn) {
        for (var i = 0; i < array.length; i++) {
            array[i].addEventListener(eventType, fn)
        }
    }
    array.addClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.add(className)
        }
        return array
    }
    array.removeClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove(className)
        }
        return array
    }
    array.text = function (value) {
        if (value !== undefined) {
            for (var i = 0; i < array.length; i++) {
                array[i].textContent = value
            }
            return array // 有传参数则设置并返回 array
        } else {
            let result = []
            for (var i = 0; i < array.length; i++) {
                result.push(array[i].textContent)
            }
            return result // 没传参数则获取值并返回值
        }
    }
    array.get = function (index) {
        return array[index]
    }
    array.end = function () {
        return array.previousSelection
    } // 完全等价
    array.siblings = function () {
        // 当取兄弟的时候只取 array 里面的第0个，获取到父元素的所有儿子里，返回的不会有文本节点
        let children = array[0].parentNode.children
        let resultArray = []
        for (var i = 0; i < children.length; i++) {
            if (children[i] !== array[0]) { // 如果 children 跟第0个元素不一样
                resultArray.push(children[i]) // 就 push 到 array 里面
            }
        }
        // let a = $(resultArray) 声明一个变量
        // return a               return a 等价于👇
        // return $(resultArray)
        let items = $(resultArray) // 新的数值
        items.previousSelection = array // 旧的数值
        return items
    }
    return array
}

// 第一部分：把选择器找到对应元素放到 array 里面
// 第二部分：往 array 上添加属性/方法
// 第三部分：return array