parent1.addEventListener('mousemove', function(e) {

    // 获取鼠标距离中点的xDiff,yDiff
    let width = parent1.getBoundingClientRect().width
    let height = parent1.getBoundingClientRect().height
    let xCenter = parent1.offsetLeft + width / 2
    let yCenter = parent1.offsetTop + height / 2
    let xDiff = e.clientX - xCenter
    let yDiff = e.clientY - yCenter


    // let distance = Math.sqrt(xDiff*xDiff + yDiff*yDiff)
    // let maxDistance = Math.sqrt(width*width + height*height) / 2

    // 将xDiff,yDiff变为百分数
    let xPercent = xDiff / (width / 2)
    let yPercent = yDiff / (height / 2)

    // 得到x,y方向的转动角度
    let xDeg = xPercent * 5
    let yDeg = yPercent * 5

    console.log(-yDeg, xDeg)

    // 通过分析轴和区间，得出
    // 当用户在x轴移动鼠标时，css转动为 rotateY(xDeg)
    // 当用户在y轴移动鼠标时，css转动为 rotateX(yDeg)
    banner1.style.transform = `translateZ(-100px) rotateX(${yDeg}deg) rotateY(${xDeg}deg)`
})