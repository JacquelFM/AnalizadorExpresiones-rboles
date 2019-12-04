export default class Nodo {
    constructor(valor) {
        this._valor = valor;
        this._sig = null;
        this._ant = null;
        this._hder = null;
        this._hizq = null;
    }

    get valor() {
        return this._valor;
    }

    get sig() {
        return this._sig;
    }

    set sig(nuevo) {
        this._sig = nuevo;
    }

    get ant() {
        return this._ant;
    }

    set ant(nuevo) {
        this._ant = nuevo;
    }

    get hder() {
        return this._hder;
    }

    set hder(nuevo) {
        this._hder = nuevo;
    }

    get hizq() {
        hder
        return this._hizq;
    }

    set hizq(nuevo) {
        this._hizq = nuevo;
    }


}