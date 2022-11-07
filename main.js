
let getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

let mbTOkb = (mb) => {
    var kb = mb * 1000
    return kb
}

let kbTOmb = (kb) => {
    var mb = kb / 1000
    return mb
}

const base = document.getElementById('base')
const fake = document.getElementById('fake')
const info = document.getElementById('info')

const state = document.getElementById('state')
const btn = document.getElementById('startDownload')
const prograss = document.getElementById('prograss-fill')
const parcent = document.getElementById('parcent')
let fileSize = mbTOkb(getRandomNumber(9, 16))

var downloaded = 0
var temp;
var isDone = false

let exe = () => {
    var totalSpeed = getRandomNumber(400, 500)
    var baseSpeed = getRandomNumber(300, totalSpeed - 50)
    var fakeSpeed = totalSpeed - baseSpeed
    base.innerText = baseSpeed + 'KB/s+'
    fake.innerText = fakeSpeed + 'KB/s'

    downloaded += totalSpeed
    if (downloaded >= fileSize) {
        isDone = true
        temp = downloaded - fileSize
    }
    info.innerText = kbTOmb(downloaded).toFixed(2) + 'MB/' + kbTOmb(fileSize) + 'MB'
    var parcentage = (downloaded * 100) / fileSize
    if (parcentage>100){
        parcent.innerText = 100 +"%"
    }else{
        parcent.innerText = parcentage.toFixed(0) +"%"
    }
    prograss.style.width = parcentage + '%'
}

window.addEventListener('load', function() {
    var clear = setInterval(function() {
        exe()
        if (isDone) {
            state.innerText = "Download finished!"
            base.innerText = 0 + 'KB/s+'
            fake.innerText = 0 + 'KB/s'

            prograss.style.background = "mediumseagreen"
            info.innerText = kbTOmb(downloaded) - kbTOmb(temp) + 'MB/' + kbTOmb(fileSize) + 'MB'
            clearInterval(clear)
        }
    }, 1000)
})
