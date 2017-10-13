//初始化缩放比例，最大缩放比例，最小缩放比例，用户不能缩放
var scale = 1 / window.devicePixelRatio
document.write(`
<meta name="viewport"
content="initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no">
`)

var width = document.documentElement.clientWidth / window.devicePixelRatio
var css = `
html{
font-size:${width / 10 * window.devicePixelRatio}px;
}`
document.write(`<style>${css}</style>`)