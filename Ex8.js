
const peso = parseFloat(prompt("Digite o seu peso:"));
const altura = parseFloat(prompt("Digite a sua altura: no formato X.XX"));
const imc = peso / (altura*altura);


let condicao;
if (imc < 18.5) {
  condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
  condicao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
  condicao = "Acima do peso";
} else {
  condicao = "Obeso";
}

document.write("<p>"+ "Seu peso é"+" "+peso.toFixed(0)+" "+"Kg"+"</p>");
document.write("<p>"+ "Sua altura é"+" "+altura.toFixed(2)+" "+"m"+"</p>");
document.write("<p>"+ "Sua condição é"+" "+"<u>"+condicao+"<u>"+"."+ "</p>");
