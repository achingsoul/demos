## API 设计（类似jQuery）

```javascript
// 给它一个 li 就会把页面里所有 li 找到并返回
// $('li') 返回所有 li
let items = $('li') 

// 【items 不是数组】
// 功能：items.on添加一个事件，然后回调。要做的是：items里的每一项在被点击时都要执行这个函数
items.on('click', function(){
  console.log('click')
})

// 给每一个item添加Class('hi')怎么做？遍历。
items.addClass('hi').removeClass('error')

// items里所有文本元素都是你好
items.text('你好')

items.get(0)

1. item 没有 siblings 方法
2. 需求要有 xxx.siblings 方法
3. $item = $(item)   $item.siblings() 返回 item 的兄弟

1. $item.siblings() 没有 addClass 方法
2. 需求要有  $item.siblings().addClass
3. $item.siblings() 的结果是 $('li') 类似的东西

$item.siblings().removeClass('active').end()
  .addClass('active')
```



## 难点：array.siblings

返回一个数组是不符合需求的，必须把数组变成含有API的东西。

用 $ 封装一下，既可以接受数组，又可以接受元素，还可以接受字符串。

```javascript
let items = $(resultArray) 
items.previousSelection = array 
return items
```

