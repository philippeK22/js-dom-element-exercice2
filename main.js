// Exercice7 Query selector

// 1

let myDiv = document.querySelector("#content");
console.log(myDiv);

// 2

let myDiv = document.querySelectorAll("#content");
console.log(myDiv);

// 3

let myClass = document.querySelector(".important");
console.log(myClass);

// // 4


let myClass = document.querySelectorAll(".important");
console.log(myClass);

// 5

let myClass = document.querySelectorAll(".important");
myClass.forEach(el => {
    let monTexte = el.textContent;
    console.log(monTexte.substring(0,monTexte.length-1).toLowerCase()
    + monTexte.substring(monTexte.length-1).toUpperCase());

});


// 6

let grandId = document.getElementById("content");
let grandPara = document.getElementsByClassName("grandParagraphe")[0];
console.log(grandId);
console.log(grandPara);






