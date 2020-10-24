"use strict";

const main = document.querySelector(".question__main");
const qYes = document.querySelectorAll(".question__yes");
const qNo = document.querySelectorAll(".question__no");
console.log(qYes[]);


// function Start() {
//    let show = document.querySelector("._show");
//    if (show) {
//       show.classList.remove("_show");
//    }
//    main.classList.add("_show");
//    btnYes();
//    btnNo();
// }
// Start();

// function btnYes() {
//    let show = document.querySelector("._show");
//    let btnYes;
//    btnYes = show.querySelector(".ask__yes");
//    btnYes.onclick = Yes;
// }

// function btnNo() {
//    let show = document.querySelector("._show");
//    let btnNo;
//    btnNo = show.querySelector(".ask__no");
//    btnNo.onclick = No;
// }

// function btnPrevious() {
//    let show = document.querySelector("._show");
//    let btnPrevious;
//    btnPrevious = show.querySelector(".ask__previous");
//    btnPrevious.onclick = Previous;
// }

// function btnStart() {
//    let show = document.querySelector("._show");
//    let btnStart;
//    btnStart = show.querySelector(".ask__start");
//    btnStart.onclick = Start;
// }

// function Yes() {
//    let show = document.querySelector("._show");
//    show.classList.remove("_show");
//    if (show == main) {
//       fulltime.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious()
//    } else if (show == fulltime) {
//       dedicatedTeam.classList.add("_show");
//       btnStart();
//    } else if (show == technicalSupport) {
//       suportPackage.classList.add("_show");
//       btnStart();
//    } else if (show == projectDuration) {
//       specification.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious()
//    } else if (show == specification) {
//       changeAxpected.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious()
//    } else if (show == changeAxpected) {
//       timeMaterial.classList.add("_show");
//       btnStart();
//    }
// }

// function No() {
//    let show = document.querySelector("._show");
//    show.classList.remove("_show");
//    if (show == main) {
//       projectDuration.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious()
//    } else if (show == fulltime) {
//       technicalSupport.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious()
//    } else if (show == technicalSupport || show == projectDuration || show == specification) {
//       timeMaterial.classList.add("_show");
//       btnStart();
//    } else if (show == changeAxpected) {
//       fixedPrice.classList.add("_show");
//       btnStart();
//    }
// }

// function Previous() {
//    let show = document.querySelector("._show");
//    show.classList.remove("_show");
//    if (show == fulltime || show == projectDuration) {
//       Start();
//    } else if (show == technicalSupport) {
//       fulltime.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious();
//    } else if (show == specification) {
//       projectDuration.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious();
//    } else if (show == changeAxpected) {
//       specification.classList.add("_show");
//       btnYes();
//       btnNo();
//       btnPrevious();
//    }
// }







