let cantidad_a_comprar = document.querySelector('#cantidad_a_comprar');
let cantidad_incorrecta = document.querySelector('#cantidad_incorrecta');
let color_seleccionado = document.querySelector('#color_seleccionado');
let calcular = document.querySelector('#calcular');
let total_pagar = document.querySelector('#total_pagar');
let total_articulos = document.querySelector('#total_articulos');
let mi_color = document.querySelector('#mi_color');
let color_error = document.querySelector('#color_error');

calcular.addEventListener('click', miFuncion);

function miFuncion () {
    if (cantidad_a_comprar.value < 0) {
        cantidad_incorrecta.innerHTML = 'Por favor, ingrese un valor positivo';
    } else if (cantidad_a_comprar.value == 0) {
        cantidad_incorrecta.innerHTML = 'Procure que la cantidad sea al menos 1'
    } else if(color_seleccionado.value === '' ) {
        color_error.innerHTML = 'Por favor, seleccione un color'
    } else {
        cantidad_incorrecta.innerHTML = '';
        color_error.innerHTML = '';
        total_pagar.innerHTML = '$ ' + 400000 * cantidad_a_comprar.value;
        total_articulos.innerHTML = cantidad_a_comprar.value;
        mi_color.style.backgroundColor = color_seleccionado.value;
    }
    // instrucciones que limpian los campos Cantidad y Color, de la tarjeta
    cantidad_a_comprar.value = '';
    color_seleccionado.value = ''
}