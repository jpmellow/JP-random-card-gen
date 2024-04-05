/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const b = document.querySelector("button");
  b.addEventListener("click", generateRandomCard);
};

function generateRandomCard() {
  const suits = ["♦", "♥", "♠", "♣"];
  const cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const suitIndex = Math.floor(Math.random() * suits.length);
  const cardIndex = Math.floor(Math.random() * cards.length);

  const randomSuit = suits[suitIndex];
  const randomCard = cards[cardIndex];
  const suitColor = suitIndex >= 2 ? "black" : "red";

  const card = document.createElement("div");
  card.innerHTML = `<div class="top-suit ${suitColor}">${randomSuit}</div>
<div class="number ${suitColor}">${randomCard}</div>
<div class="bottom-suit rotated ${suitColor}">${randomSuit}</div>`;
  card.className = "card";
  document.body.appendChild(card);

  // const topSuit = document.querySelector(".top-suit");
  // topSuit.innerText = randomSuit;

  // const bottomSuit = document.querySelector(".bottom-suit");
  // bottomSuit.innerText = randomSuit;

  // const cardValue = document.querySelector(".number");
  // cardValue.innerText = randomCard;

  // topSuit.style.color = suitColor;
  // bottomSuit.style.color = suitColor;
  // cardValue.style.color = suitColor;
}
