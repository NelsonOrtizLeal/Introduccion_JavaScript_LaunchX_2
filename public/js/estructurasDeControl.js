//IF - ELSE

let age = prompt("Introduce tu edad");

if (age && Number(age)) {
    console.log("Podemos continuar con la validaciones");
} else {
    console.log("Introduce tu edad");
    location.reload();
}


// let confirmation = confirm("¿Estás de acuerdon con seguir con esto?");

// console.log("Tu edad es %s y has %s la pregunta", age, confirmation);
// console.log(`Tu edad es ${age} y has ${confirmation} la pregunta`);