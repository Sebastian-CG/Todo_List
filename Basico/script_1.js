// TODO Variables
const NOMBRE = "Sebastian"
let recomendad = "Variable con scope de bloque";
var noRecomendada = "Variable con scope Global";

// TODO Tipo de datos simples
let string = "String";
let number = 9067;
let boolean = true; // Or false.

// TODO Tipo de datos complejos
let array = [159, "Mundo", true, 32,];
let object = {
    os: "Ubuntu 20.04.1 LTS x86_64",
    resolution: "1920x1080",
    cpu: "Intel i7-3770 (8) @ 3.900GHz",
    memory: "2703MiB / 15890MiB"
}

// TODO Operadores matemáticos
let suma = 12 + 43;
let resta = 12 - 43;
let multi = 12 * 43;
let div = 12 / 43;

// TODO Operadores unitarios
let x = 0;
x++;
x--;

x += 22;
x -= 10;
x *= 2;
x /= 2;

// TODO Operadores de comparación
let compara_valor = "12" == 12;
let compara_valor_tipoDeDato = "12" === 12;

// ValorX es distinto a ValorY, y hace comparación de valor.
let compara_simple = "12" != 12;
// ValorX es distinto a ValorY, y hace comparación de valor y tipo de dato.
let compara_compleja = "12" !== 12;

/**
 * Al usar AND estamos diciendo que todos las condiciones se tienen
 * quw cumplir para que la condicion sea true; En el caso de que una
 * condicion no se cumpla tomara toda como falso.
 */
let and = 12 == "12" && "Hola Mundo" === "Hola Mundo";
/**
 * Al usar OR estamos diciendo que solo una de las condiciones se
 * tiene que cumplir para que toda sea true, Si todas son falsas
 * marcara false.
 */
let or = 12 === "12" || "Hola Mundo" == "Hola Mundo";

// TODO Condicionales

// if y else
if (condicion) {
    // código a ejecutar si la condicion se cumple
} else {
    // código a ejecutar si la condicion no cumple
}

// switch's
switch (comparador) {
    case 1:
        // código a ejecutar si el switch coincide.
        break;
    case 2:
        // código a ejecutar si el switch coincide.
        break;
    default:
        // código a ejecutar si no coincide con ningún switch.
        break;
}

// for
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}