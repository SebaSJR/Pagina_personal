// var totalComida = 2800 + 1300;
// var totalBebida = 900 + 650;

// var total = totalComida + totalBebida;

// console.log("El total de comida es:" + totalComida);
// console.log("El total de la bebida es: " + totalBebida);
// console.log("El total de la cuenta es: " + total);

let a =Number(10)
let b=Number(25)

let operacion="suma";
function operaciones(a, b, operacion){
    switch (operacion){
        case "suma":
        console.log("Total suma: " +a+ "+" + b+"=" + (a+b)); 
        break;
        default:
            console.log("Total suma: " +a+ "+" + b+"=" + (a+b));
    }
}
operaciones(a, b, operacion);