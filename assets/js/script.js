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
    // se ha seleccionado sólo el color pero la cantidad no es correcta
    if (cantidad_a_comprar.value <= 0 && color_seleccionado.value != '') {
        color_error.style.border = '0';
        cantidad_incorrecta.innerHTML = 'Ingrese un valor positivo';
        cantidad_incorrecta.style.border = '1px solid yellow';
        cantidad_incorrecta.style.borderRadius = '5px';
        cantidad_incorrecta.style.padding = '1%';
        color_error.innerHTML = '';
    } else
    // la cantidad es correcta, pero el campo color está vacío
    if (cantidad_a_comprar.value > 0 && color_seleccionado.value == '')  {
        cantidad_incorrecta.style.border = '0';
        cantidad_incorrecta.innerHTML = '';
        color_error.innerHTML = 'Por favor, ingrese un color';
        color_error.style.border = '1px solid yellow';
        color_error.style.borderRadius = '5px';
        color_error.style.padding = '1%';
    } else
    // si ambos campos están vacíos, envía mensajes respectivos
    // en caso contrario, se envía un mensaje, que aparece en la tarjeta
    if (cantidad_a_comprar.value <= 0 && color_seleccionado.value == '') {
        color_error.innerHTML = 'El campo color está vacío';
        cantidad_incorrecta.innerHTML = 'Ingrese un valor positivo';
        cantidad_incorrecta.style.border = '1px solid yellow';
        color_error.style.border = '1px solid yellow';
        cantidad_incorrecta.style.borderRadius = '5px';
        color_error.style.borderRadius = '5px';
        cantidad_incorrecta.style.padding = '1%';
        color_error.style.padding = '1%';
    }
    // no ocurre ninguna de las situaciones anteriores,
    // vale decir, se ha seleccionado un color y la cantidad es positiva
    else {
        // se crea una variable auxiliar para guardar la cantidad a pagar
        let subtotal = 459690 * cantidad_a_comprar.value
        cantidad_incorrecta.innerHTML = '';
        color_error.innerHTML = '';
        // se modifica el DOM agregando la cantidad a pagar
        // pero se agrega una función para modificar su formato,
        // que es más adecuado a los países de habla hispana
        total_pagar.innerHTML = '$ ' + new Intl.NumberFormat('es-ES').format(subtotal);
        total_articulos.innerHTML = cantidad_a_comprar.value;
        mi_color.style.backgroundColor = color_seleccionado.value;
        cantidad_incorrecta.style.border = '0';
        color_error.style.border = '0';
    }
    // hecha las operaciones, se incluyen las instrucciones
    // que limpian los campos Cantidad y Color, de la tarjeta
    // pero no la última información ingresada a la derecha
    cantidad_a_comprar.value = '';
    color_seleccionado.value = ''
}