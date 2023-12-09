export default class Galeria {

    constructor(cantidad) {
        this._nombres = [];
        //if (cantidad > 7) cantidad = 7;
        //if (cantidad < 1) cantidad = 1;
        for (let i = 1; i <= cantidad; i++) {
            this._nombres.push('foto' + i + '.jpg');
        }
        this._imgIndex = this.cursorRandom();
    }

    cursorRandom() {
        this._imgIndex = Math.floor(Math.random() * this._nombres.length);
        return this._nombres[this._imgIndex];
    }

    cursorUltimo() {
        this._imgIndex = this._nombres.length - 1;
        return this._nombres[this._imgIndex];
    }

    cursorPrimero() {
        this._imgIndex = 0;
        return this._nombres[this._imgIndex];
    }

    cursorAnterior() {
        this._imgIndex--;
        return this._nombres[this._imgIndex];
    }

    cursorSiguiente() {
        this._imgIndex++;
        return this._nombres[this._imgIndex];
    }

    get imgIndex() {
        return this._imgIndex;
    }

    set imgIndex(i) {
        this._imgIndex = i;
    }

    get nombres() {
        return this._nombres;
    }

    set nombres(names) {
        this._nombres = names;
    }
}