//function pintar(){
//    ele = document.getElementById("ele1")
//    ele.style.backgroundColor = 'yellow'
//    }
//    ele = document.getElementById("ele1")
//    ele.addEventListener("click", pintar);


//3.1
//const pintar = (e) => e.style.backgroundColor = 'yellow';

//let elem = document.getElementById('ele1');
//elem.addEventListener('click', () => pintar(elem))

//3.2
const pintar = (e, c = 'green') => e.style.backgroundColor = c;

let elem = document.getElementById('ele1');
elem.addEventListener('click', () => pintar(elem, 'yellow'))

