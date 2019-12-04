export default class Lista {
    constructor() {
        this._primerNodo = null;
        this._ultimoNodo = null;
    }

    agregarNodo(nodo) {
        if (this._primerNodo == null) {
            this._primerNodo = nodo;
            this._ultimoNodo = nodo;
            this._primerNodo.sig = this._ultimoNodo;
        } else {
            this._ultimoNodo.sig = nodo;
            nodo.ant = this._ultimoNodo;
            this._ultimoNodo = nodo;
        }
    }


    mostrarNodos() {
        let inicio = this._primerNodo;

        while (inicio.sig != null) {
            inicio = inicio.sig;
            console.log(inicio.valor);
        }
    }

    arbol() {
        let inicio = this._primerNodo;

        while (inicio.sig != null) {
            inicio = inicio.sig;

            if (inicio.valor == "/" || inicio.valor == "*") {
                inicio.hizq = inicio.ant;
                inicio.hder = inicio.sig;
                inicio.sig.sig.ant = inicio;
                inicio.sig = inicio.sig.sig;

                inicio.ant.ant.sig = inicio;
                inicio.ant = inicio.ant.ant;
            }
        }

        inicio = this._primerNodo;

        while (inicio.sig != null) {
            inicio = inicio.sig;

            if (inicio.valor == "+" || inicio.valor == "-") {
                inicio.hizq = inicio.ant;
                inicio.hder = inicio.sig;
                if (inicio.sig.sig.valor == null) {
                    inicio.sig.sig.ant = inicio;
                    inicio.sig = inicio.sig.sig;

                }
            }
        }

        console.log(this._primerNodo);

    }


}