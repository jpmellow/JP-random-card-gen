/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";
import { right } from "@popperjs/core";

window.onload = function() {
  const b = document.querySelector("button";
  b.addEventListener("click", generateRandomCard);
  generateRandomCard()};

  setInterval

  function generateRandomCard() {
    const suits = [♦, ♥, ♠, ♣];
    const numbers = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'K'
    ]
  };

  const suitIndex = Math.floor(Math.random() * suit.length);
  const cardIndex = Math.floor(Math.random() * cards.length);

  const randomSuit = suits[suitIndex];

  const randomCard = cards[cardIndex];

  const topSuit = document.querySelector('.left');
  topSuit.innerText = randomSuit;

  const bottomSuit = document.querySelector('.right');

  CardValue.innerText = randomCard;

  const suitColor = suitIndex >= 2 ? "black" : "red";

  left.style.color = suitColor;
  right.style.color = suitColor;
  Number.style.color = suitColor;

}
