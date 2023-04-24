const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionario:"));
const percentReajuste = parseFloat(prompt("Digite o percentual do reajuste:"));
const novoSalario = (salarioAtual*(percentReajuste/100))+salarioAtual;


document.write("<p>"+ "Seu salário atual é"+" "+"R$"+salarioAtual.toFixed(2)+"."+"</p>");
document.write("<p>"+ "Seu reajuste é"+" "+percentReajuste+"%."+"</p>");
document.write("<p>"+ "Seu salário com reajuste é"+" "+"R$"+novoSalario.toFixed(2)+"."+ "</p>");
