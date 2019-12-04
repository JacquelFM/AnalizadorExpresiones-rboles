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

        });
    }
}

let m = new Main();