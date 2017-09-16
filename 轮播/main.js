window.slides = function (element) {
    var $el = $(element)
    let $view = $el.children('.view')
    var width = $el.width()
    var count = $el.find('.slide').length
    var currentIndex = 0
    let timerId

    $ol = $el.children('.controls')

    $ol.on('click', 'li', function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlide(index)
    })

    $view.on('mouseenter', function () {
        window.clearInterval(timerId)
    })
    $view.on('mouseleave', function () {
        autoPlay()
    })

    function goToSlide(index) {
        if (index < 0) {
            index = count - 1
        } else if (index >= count) {
            index = 0
        }

        let number = - width * index
        $view.css({
            transform: `translateX(${number}px)`
        })
        currentIndex = index
    }

    // 自动播放
    function autoPlay() {
        timerId = setInterval(function () {
            goToSlide(currentIndex + 1)
        }, 3000)
    }
    autoPlay()

}

//

slides(document.querySelector('.slides'))