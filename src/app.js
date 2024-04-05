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
  const suites = ["♦", "♥", "♠", "♣"];
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

  const suiteIndex = Math.floor(Math.random() * suites.length);
  const cardIndex = Math.floor(Math.random() * cards.length);

  const randomSuite = suites[suiteIndex];
  const randomCard = cards[cardIndex];
  const suiteColor = suiteIndex >= 2 ? "black" : "red";

  const card = document.createElement("div");
  card.innerHTML = `<div class="top-suit ${suiteColor}">${randomSuite}</div>
<div class="number ${suiteColor}">${randomCard}</div>
<div class="bottom-suit rotated ${suiteColor}">${randomSuite}</div>`;
  card.className = "card";
  document.body.appendChild(card);

  // const topSuite = document.querySelector(".top-suite");
  // topSuite.innerText = randomSuite;

  // const bottomSuite = document.querySelector(".bottom-suite");
  // bottomSuite.innerText = randomSuite;

  // const cardValue = document.querySelector(".number");
  // cardValue.innerText = randomCard;

  // topSuite.style.color = suiteColor;
  // bottomSuite.style.color = suiteColor;
  // cardValue.style.color = suiteColor;
}
