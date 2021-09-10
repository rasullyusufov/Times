
const soat = document.getElementById('hour')
const daqiqa = document.getElementById('minute')
const soniya = document.getElementById('secund')
const kun = document.getElementById('kun')
const oy = document.getElementById('oy')
const yil = document.getElementById('yil')


function vaqtlar() {

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    soat.innerHTML = today.getHours() + ":"
    daqiqa.innerHTML = today.getMinutes() + ":"
    soniya.innerHTML = today.getSeconds();
    kun.innerHTML = today.getDate() + "kun"
    oy.innerHTML = today.getMonth() + "oy"
    yil.innerHTML = today.getFullYear() + "yil"

}
setInterval(vaqtlar, 1000);
