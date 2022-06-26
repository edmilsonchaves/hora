

function atualizarHora (){
    var agora = new Date();

    var relogio = document.querySelector('p');
    var data = document.querySelector('.data');

    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    if (hora < 10) {
        hora = '0' + hora
    }
    
    if (minutos < 10) {
        minutos = '0' + minutos
    }

    if (segundos < 10) {
        segundos = '0' + segundos
    }

    relogio.textContent = `${hora}:${minutos}:${segundos}`
    data.textContent = agora.toLocaleDateString()
}

setInterval(atualizarHora, 1000)