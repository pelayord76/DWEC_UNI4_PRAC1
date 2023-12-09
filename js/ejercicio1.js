import Galeria from "./Galeria.js"

var cantidad = 7; //prompt("Selecciona cuantas fotos tendrá el visor:");
var galeria = new Galeria(cantidad);

window.addEventListener('load', init);

function init() {
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + galeria.cursorRandom(); + ')';

    // posibilidad de que en la primera imagen se carguen la primera o ultima
    if (galeria.imgIndex === 0) {
        document.getElementById('primera').classList.add('deshabilitado');
        document.getElementById('anterior').classList.add('deshabilitado');
    }
    else if (galeria.imgIndex === cantidad - 1) {
        document.getElementById('ultima').classList.add('deshabilitado');
        document.getElementById('siguiente').classList.add('deshabilitado');
    }

    // eventos de botones
    document.getElementById("primera").addEventListener("click", function () {
        nuevaImagen(galeria.cursorPrimero());
    });
    document.getElementById("anterior").addEventListener("click", function () {
        if (galeria.imgIndex !== 0) {
            nuevaImagen(galeria.cursorAnterior());
        }
    });
    document.getElementById("siguiente").addEventListener("click", function () {
        if (galeria.imgIndex !== cantidad - 1) {
            nuevaImagen(galeria.cursorSiguiente());
        }
    });
    document.getElementById("ultima").addEventListener("click", function () {
        nuevaImagen(galeria.cursorUltimo());
    });

    // evento de flechas del teclado
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            if (galeria.imgIndex !== cantidad - 1) {
                nuevaImagen(galeria.cursorSiguiente());
            }
        }
        if (event.key === 'ArrowLeft') {
            if (galeria.imgIndex !== 0) {
                nuevaImagen(galeria.cursorAnterior());
            }
        }
    });

}

function nuevaImagen(img) {
    document.querySelector('#imagen').style.backgroundImage = 'url(images/' + img + ')';
    cambiarBotones();
}

function cambiarBotones() {
    // podrian ser if elses comprimidos, más curioso:
    // document.getElementById('primera').className = (galeria.imgIndex === 0) ? 'deshabilitado' : 'habilitado';
    // yo los veo mas claro asi

    if (galeria.imgIndex === 0) document.getElementById('primera').className = 'deshabilitado';
    else document.getElementById('primera').className = 'habilitado';

    if (galeria.imgIndex === 0) document.getElementById('anterior').className = 'deshabilitado';
    else document.getElementById('anterior').className = 'habilitado';

    if (galeria.imgIndex === cantidad - 1) document.getElementById('ultima').className = 'deshabilitado';
    else document.getElementById('ultima').className = 'habilitado';

    if (galeria.imgIndex === cantidad - 1) document.getElementById('siguiente').className = 'deshabilitado';
    else document.getElementById('siguiente').className = 'habilitado';
}
