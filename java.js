const soat = document.querySelector('.soat');
const minut = document.querySelector('.minut');
const sekund = document.querySelector('.sekund');
const kun = document.querySelector('.kun');
const oy = document.querySelector('.oy');
const yil = document.querySelector('.yil');

function runTime() {
    const data = new Date()
    soat.textContent = data.getHours();
    minut.textContent = data.getMinutes();
    sekund.textContent = data.getSeconds();
    kun.innerHTML = data.getDate();
    oy.innerHTML = data.getMonth() +1 ;
    yil.innerHTML = data.getFullYear();
}

runTime()
setInterval(() => {
    runTime()
}, 1000)