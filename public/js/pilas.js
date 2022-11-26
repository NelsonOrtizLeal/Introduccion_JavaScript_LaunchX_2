// Pila -> LIFO

/*
* Last
* In
* First
* Out
 */

class Pila{
    
    constructor(){
        this.pila = {},
        this.contador = 0
    };

    // Función para agregar elementos a la pila
    push(elemento){
        this.pila[this.contador] = elemento;
        this.contador++;
        return this.pila;
    }

    // Funcion para sacar el ultimo elemento
    pop(){
        this.contador--;
        const elemento = this.pila[this.contador];
        delete this.pila[this.contador];
        return elemento;
    }

    // Solo muestra el ultimo elemento
    peek(){
        return this.pila[this.contador - 1];
    }

    // Devuelve el tamaño de la pila
    size(){
        return this.contador;
    }

    imprime(){
        console.log(this.pila);
    }
}

// Creando un objeto de la clase creada
const miPila = new Pila();
miPila.imprime();
console.log(miPila.size());
miPila.push("Hola");
miPila.imprime();
miPila.push(5);
miPila.imprime();
console.log(miPila.pop());
miPila.imprime();
