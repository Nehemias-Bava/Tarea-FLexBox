// // Función para generar un color aleatorio en formato hexadecimal
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Función para cambiar el color de fondo del botón 1
// document.getElementById("button1").addEventListener("click", function() {
//     this.style.backgroundColor = getRandomColor();
// });

// // Función para cambiar el color de fondo del botón 3 al hacer clic en el botón 2
// document.getElementById("button2").addEventListener("click", function() {
//     var button3 = document.getElementById("button3");
//     button3.style.backgroundColor = getRandomColor();
// });


// // Función para cambiar el tamaño de fuente del botón 2 al hacer clic en el botón 3
// document.getElementById("button3").addEventListener("click", function() {
//     var button2 = document.getElementById("button2");
//     var sizes = ['10px', '15px', '20px', '25px'];
//     var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
//     button2.style.fontSize = randomSize;
// });


// // Función para cambiar el fondo del body de forma aleatoria
// document.getElementById("button4").addEventListener("click", function() {
//     document.body.style.backgroundColor = getRandomColor();
// });

//Funciones para sumar y restar al contador
var contador = 0;
var contadorElement = document.getElementById("contador");
var mensajeElement = document.getElementById("mensaje");

function sumarUno() {
    contador++;
    contadorElement.innerHTML = contador;
    mostrarMensaje("Sumaste 1", "verde");
}

function sumarCinco() {
    contador += 5;
    contadorElement.innerHTML = contador;
    mostrarMensaje("Sumaste 5", "verde");
}

function restarUno() {
    contador--;
    contadorElement.innerHTML = contador;
    mostrarMensaje("Restaste 1", "rojo");
}

function restarCinco() {
    contador -= 5;
    contadorElement.innerHTML = contador;
    mostrarMensaje("Restaste 5", "rojo");
}

function resetear() {
    contador = 0;
    contadorElement.innerHTML = contador;
    ocultarMensaje();
}

function mostrarMensaje(texto, color) {
    mensajeElement.innerHTML = texto;
    mensajeElement.classList.add(color);
}

function ocultarMensaje() {
    mensajeElement.innerHTML = "";
    mensajeElement.classList.remove("verde", "rojo");
}

document.getElementById("button1").addEventListener("click", sumarUno);
document.getElementById("button2").addEventListener("click", sumarCinco);
document.getElementById("button3").addEventListener("click", restarUno);
document.getElementById("button4").addEventListener("click", restarCinco);
document.getElementById("button5").addEventListener("click", resetear);