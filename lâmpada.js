const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');



function lampIsBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!lampIsBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}


function lampOff() {
    if (!lampIsBroken()) {
        lamp.src = './img/desligada.jpg';
    }

}


function lampBroken() {
    lamp.src = './img/quebrada.jpg';

}


turnOff.addEventListener('click', lampOff);
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);