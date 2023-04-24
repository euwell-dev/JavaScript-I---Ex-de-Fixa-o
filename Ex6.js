
const fahrenheit = parseInt(prompt("Digite a temperatura em Fahrenheit:"));
const celcius = (fahrenheit -32)*5/9;


document.write("<p>"+ "Sua temperatura em fahrenheit é"+" "+fahrenheit+"°F"+"</p>");
document.write("<p>"+ "Sua temperatura convertida para Celcius é"+" "+celcius.toFixed(1)+"°C"+ "</p>");
