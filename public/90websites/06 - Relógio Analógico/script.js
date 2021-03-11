const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sg = document.querySelector('#sg');

setInterval(() => {
    let dia = new Date();
    let hora = dia.getHours() * 30;
    let min = dia.getMinutes() * deg;
    let seg = dia.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hora + (min/12)}deg)`;
    mn.style.transform = `rotateZ(${(min)}deg)`;
    sg.style.transform = `rotateZ(${seg}deg)`;

})