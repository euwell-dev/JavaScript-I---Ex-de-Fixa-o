
const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
const numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

let maiorNumero;
if (numero1 > numero2 && numero1 > numero3) {
  maiorNumero = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
  maiorNumero = numero2;
} else {
  maiorNumero = numero3;
}

console.log("O maior número é: " + maiorNumero)
