let select = document.getElementById('select')
let currenttime = document.getElementById('myh1')
let selectt = document.getElementById('selectt')
let selecttt = document.getElementById("selecttt")
let ringtone = new Audio("Drake-Slime-You-Out-Ft-SZA-(JustNaija.com).mp3")
let myh2 = document.getElementById('myh2')

for (let index = 0; index <= 24; index++) {
    index = index < 10 ? "0" + index : index
    select.innerHTML += `<option value="${index}"> ${index}</option>`

}
for (let index = 0; index <= 60; index++) {
    index = index < 10 ? "0" + index : index
    selectt.innerHTML += `<option value="${index}"> ${index}</option>`

}
for (let index = 0; index <= 1; index++) {
    let ampam = index == 0 ? "AM" : "PM";
    selecttt.innerHTML += `<option value="${ampam}"> ${ampam}</option>`;

}
let date = new Date

let Alarm = setInterval(() => {
    let date = new Date,
        h = date.getHours(),
        m = date.getMinutes()
    se = date.getSeconds()
    ampam = "PM"

    if (h >= 24) {
        h = h = 24
        ampam = "AM"

    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    se = se < 10 ? "0" + se : se
    currenttime.innerHTML = (`${h}:${m}:${se} ${ampam}`);

    if (select.value == date.getHours() && selectt.value == date.getMinutes()) {
        ringtone.play()
    }
}, 1000);


function start() {
    if (select.value == '' && selectt.value == '') {
        alert("You haven't set an alarm yet")
    }
    else if (select.value < date.getHours()) {
        alert('Invaild Time')

    }
    else {
        alert('An alarm has been set')
    }


}
function stopalarm() {
    clearInterval(Alarm)
    ringtone.pause()
}