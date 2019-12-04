import Nodo from "./Nodo.js";
import Lista from "./Lista.js";


class Main {
    constructor() {
        this._lista = new Lista()

        document.getElementById('calcular').addEventListener('click', () => {
            let expresion = document.getElementById('expresion').value;

            for (let i = 0; expresion.length > i; i++) {
                let valor = expresion.charAt(i);
                this._lista.agregarNodo(
                    new Nodo(
                        valor

                    ));
            }

            // this._lista.mostrarNodos();

            this._lista.arbol();
            this._lista.preOrder(6, null);
            this._lista.inOrder(6, null);
            this._lista.postOrder(6, null);

        });
    }
}

let m = new Main();