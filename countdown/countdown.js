var btnStart = document.querySelector('#start')
var btnPause = document.querySelector('#pause')
var btnReset = document.querySelector('#reset')
var timeLeft = document.querySelectorAll(".time")
var total = 2 * 3600
var timerID = -1

btnStart.addEventListener('click', function () {
    btnStart.style.display = 'none'
    btnPause.style.display = 'inline-block'
    timerID = setInterval(function () {
        if (total <= 0) {
            clearInterval(timerID)
        }
        total -= 1;

        var hour = parseInt(total / 3600, 10)
        var minute = parseInt((total - hour * 3600) / 60)
        var second = total - hour * 3600 - minute * 60
        if (second < 10) {
            return timeLeft[2].innerHTML = `0${second}`
        }
        if (minute < 10) {
            return timeLeft[1].innerHTML = `0${minute}`
        }

        timeLeft[0].innerHTML = `0${hour}`
        timeLeft[1].innerHTML = `${minute}`
        timeLeft[2].innerHTML = `${second}`


        btnPause.addEventListener('click', function () {
            if (timerID != -1) {
                clearInterval(timerID)
            }
            btnStart.style.display = 'inline-block';
            btnPause.style.display = 'none';
            timeLeft[0].innerHTML = `0${hour}`
            timeLeft[1].innerHTML = `${minute}`
            timeLeft[2].innerHTML = `${second}`
        })
        btnReset.addEventListener('click', function () {
            if (timerID != -1) {
                clearInterval(timerID)
            }
            total = 2 * 3600
            btnStart.style.display = 'inline-block';
            btnPause.style.display = 'none';
            timeLeft[0].innerHTML = `02`
            timeLeft[1].innerHTML = `00`
            timeLeft[2].innerHTML = `00`
        })
    }, 1000)
})
