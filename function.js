let select = document.getElementById('select')
let currenttime = document.getElementById('myh1')
let selectt = document.getElementById('selectt')
let selecttt = document.getElementById("selecttt")
let date = new Date
let myh1 = document.getElementById('myh1')

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
setInterval(() => {
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
    currenttime.innerHTML = (`${h}:${m} ${se} ${ampam}`);
}, 1000);


function start() {
    let time = `${select.value}:${selectt.value} ${selecttt.value} `
    console.log(time);
}
