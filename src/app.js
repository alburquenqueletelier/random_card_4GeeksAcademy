/* eslint-disable */
import "bootstrap";
import "./style.css";

const pintaRandom = () => {
  let pinta = Math.floor(Math.random() * 4);
  if (pinta === 0) return "corazon";
  if (pinta === 1) return "pica";
  if (pinta === 2) return "trebol";
  return "diamante";
};

const numeroRandom = () => {
  let numero = Math.floor(Math.random() * 13);
  if (numero < 10) return numero + 1;
  if (numero === 10) return "J";
  if (numero === 11) return "Q";
  return "K";
};

const nuevaCarta = () => {
  let pintaCard = pintaRandom();
  let numero = numeroRandom();
  let card = document.querySelector(".card");
  card.innerHTML = numero;
  card.className = "card " + pintaCard;
};

window.onload = function() {
  //write your code here
  document.querySelector("button").onclick = () => nuevaCarta();
  nuevaCarta();
  let contador = 1;
  let spanContador = document.querySelector("#contador");
  window.setInterval(() => {
    if (contador % 10 == 0) nuevaCarta();
    spanContador.innerHTML = contador;
    contador++;
  }, 1000);
};
