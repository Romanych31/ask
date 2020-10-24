"use strict";

const main = document.querySelector(".question__main");
const btnYes = document.querySelectorAll(".button__yes");
const btnNo = document.querySelectorAll(".button__no");
const btnPre = document.querySelectorAll(".button__previous");
const btnStart = document.querySelectorAll(".button__start");
const qYes = document.querySelectorAll(".question__yes");
const qNo = document.querySelectorAll(".question__no");
let j = 1;
// start();
for (let i = 0; i < btnYes.length; i++) {
   btnYes[i].addEventListener("click", Yes);
}
for (let i = 0; i < btnNo.length; i++) {
   btnNo[i].addEventListener("click", No);
}
for (let i = 0; i < btnPre.length; i++) {
   btnPre[i].addEventListener("click", previous);
}
for (let i = 0; i < btnStart.length; i++) {
   btnStart[i].addEventListener("click", start);
}

function Yes() {
   let show = document.querySelector(".show");
   let Yes = searchChild(qYes);
   show.classList.remove("show");
   Yes.classList.add("show");
   ++j;
   count(j);
}
function No() {
   let show = document.querySelector(".show");
   let No = searchChild(qNo);
   show.classList.remove("show");
   No.classList.add("show");
   ++j;
   count(j);
}
function previous() {
   let show = document.querySelector(".show");
   show.parentNode.parentNode.classList.add("show");
   show.classList.remove("show")
   --j;
   count(j);
}
function start() {
   let show = document.querySelector(".show");
   show.classList.remove("show");
   main.classList.add("show");
   j = 1;
   count(j);
}
function searchChild(child) {
   for (let i = 0; i < child.length; i++) {
      if (child[i].parentNode.parentNode.matches(".show")) {
         return child[i];
      }
   }
}
function count(i) {
   let show = document.querySelector(".show");
   let text = show.querySelector(".question__text");
   if (text.hasAttribute("data-num")) {
      text.setAttribute("data-num", i);
   }
}










