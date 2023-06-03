let cantidad_a_comprar = document.querySelector('#cantidad_a_comprar');
let cantidad_incorrecta = document.querySelector('#cantidad_incorrecta');
let color_seleccionado = document.querySelector('#color_seleccionado');
let calcular = document.querySelector('#calcular');
let total_pagar = document.querySelector('#total_pagar');
let total_articulos = document.querySelector('#total_articulos');
let mi_color = document.querySelector('#mi_color');

calcular.addEventListener('click', miFuncion);

function miFuncion () {
    console.log('dentro de la función');
    if (cantidad_a_comprar.value < 0) {
        console.log(cantidad_a_comprar.value);
        cantidad_incorrecta.innerHTML = 'Por favor, ingrese un valor positivo';
    } else if (cantidad_a_comprar.value == 0) {
        cantidad_incorrecta.innerHTML = 'Procure que la cantidad sea al menos 1'
    } else {
        
    }
}