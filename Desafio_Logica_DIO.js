const prompt = require('prompt-sync')();
let heroi = prompt('Informe o nome do Herói: ');
let xp = prompt('Informe o nível do Herói: ');
let nivel = "";
let i = 0;

while (i < 12000) {
  if (xp <= 1000) {
    nivel = "Ferro";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  } else if (xp >= 10001) {
    nivel = "Radiante";
    //console.log('O Herói', heroi, 'está no nível', nivel); // linha incluída para testar as condições
    i = i + 500;
    //xp = xp + 500 // linha incluída para testar as condições
  }
}

console.log("O Herói", heroi, "está no nível", nivel);
