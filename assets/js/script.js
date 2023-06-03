let cantidad_a_comprar = document.querySelector('#cantidad_a_comprar');
let cantidad_incorrecta = document.querySelector('#cantidad_incorrecta');
let color_seleccionado = document.querySelector('#color_seleccionado');
let calcular = document.querySelector('#calcular');
let total_pagar = document.querySelector('#total_pagar');
let total_articulos = document.querySelector('#total_articulos');
let mi_color = document.querySelector('#mi_color');
let color_error = document.querySelector('#color_error');


// se incluye un oídor en botón Calcular Total, que llama a la función miFuncion
calcular.addEventListener('click', miFuncion);


// definición de la función miFuncion
function miFuncion () {
    // se verifica que la cantidad no sea un entero negativo
    // en caso contrario, se envía un mensaje, que aparece en la tarjeta
    if (cantidad_a_comprar.value < 0) {
        cantidad_incorrecta.innerHTML = 'Por favor, ingrese un valor positivo';
    } else
    // en caso se ser la cantidad igual a cero, se pide que al menos ingrese el valor 1
    if (cantidad_a_comprar.value == 0) {
        cantidad_incorrecta.innerHTML = 'La cantidad debe ser al menos 1'
    } else
    // si el campo de Color estuviere vacío,
    // aparece un mensaje en la tarjeta indicando esta situación
    if(color_seleccionado.value === '' ) {
        color_error.innerHTML = 'Por favor, seleccione un color'
    }
    // si la cantidad es al menos 1 y hay un color especificado
    // se procede a hacer los cálculos correspondientes
    // los que aparecen reflejados al costado de la tarjeta
    else {
        // se crea una variable auxiliar para guardar la cantidad a pagar
        let subtotal = 400000 * cantidad_a_comprar.value
        cantidad_incorrecta.innerHTML = '';
        color_error.innerHTML = '';
        // se modifica el DOM agregando la cantidad a pagar
        // pero se agrega una función para modificar su formato
        // más adecuado a los países de habla hispana
        total_pagar.innerHTML = '$ ' + new Intl.NumberFormat('es-ES').format(subtotal);
        total_articulos.innerHTML = cantidad_a_comprar.value;
        mi_color.style.backgroundColor = color_seleccionado.value;
    }
    // hecha las operaciones, se incluyen las instrucciones
    // que limpian los campos Cantidad y Color, de la tarjeta
    // pero no la última información ingresada a la derecha
    cantidad_a_comprar.value = '';
    color_seleccionado.value = ''
}