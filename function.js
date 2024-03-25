let select = document.getElementById('select')
let selectt = document.getElementById('selectt')
let date = new Date
 let myh1 = document.getElementById('myh1')
for (let index = 0; index <= 24; index++) {
    select.innerHTML +=`<option value="${index}"> ${index}</option>`

}

for (let index = 0; index <= 60; index++) {
    selectt.innerHTML +=`<option value="${index}"> ${index}</option>`

}
myh1.innerHTML = `${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`