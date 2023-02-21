//Clase a agregar al seleccionar letra
let color = '';

//Elemento Vista previa color
let spanPreview = document.querySelector('.color');


// Funcion Cambia color fondo a elemento
const changeBgColor = (elem, color) => {
    elem.style.backgroundColor = color;
}

//agrega evento para escuchar keydown
document.addEventListener("keydown", (e) => {
    switch(e.key.toLowerCase()){
        case "a" :
            color = 'yellow';
            break;
        
        case "s" :
            color = 'red';
            break;
        
        case "d" :
            color = 'green';
            break;
        default:
            color = '';
            console.log('Debe seleccionar algunas de las opciones disponibles');
    }
    if(color != ''){
        changeBgColor(spanPreview, color);
    }
})

//Captura todos los elementos con clase .square
const squareDivs = document.querySelectorAll('.square');

//por cada div.square, agrega el event listener de click, cambia el bg color
squareDivs.forEach((el) => el.addEventListener('click', (e) => {
    if(color != ''){
        changeBgColor(el, color)
    }
}));