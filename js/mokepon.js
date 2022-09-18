let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonPlanta = document.getElementById('boton-planta');
    botonPlanta.addEventListener('click', ataquePlanta);
}

function seleccionarMascotaJugador() {

    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
    } else {
        alert('Selecciona una mascota')
    } 

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    
    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipépo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo()
}

function ataquePlanta(){
    ataqueJugador = 'PLANTA';
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO';
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA';
    } else {
        ataqueEnemigo = 'PLANTA';
    }

    combate()
}

function combate() {
    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("😴 EMPATE");
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') 
    || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') 
    || (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA')) {
        crearMensaje("👑 GANASTE");
    } else {
        crearMensaje("🤡 PERDISTE");
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes');
    
    let parrafo = document.createElement('p');

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + '. La mascota del enemigo atacó con ' + ataqueEnemigo + '. ' + resultado + '.'

    sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

window.addEventListener('load', iniciarJuego);

