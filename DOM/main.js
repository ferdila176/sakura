// const header = document.getElementById('header');
// header.style.color = 'red';

// const element = document.getElementById("myDIV");
// element.classList.add("btn")
// element.classList.add("btn-primary")

// const elemen = document.getElementById("myDIV");
// element.classList.add("btn")
// element.classList.add("btn-primary")

// const paragraf = document.getElementsByTagName('p');
//  for(let i = 0; i <= paragraf.length; i++) {
//    paragraf[1].style.color = "orange"
// }

// const Element = document.getElementById("addElementButton");
// Element.classList.add("btn")
// Element.classList.add("btn-outline-success")

// const paragraf = document.getElementsByClassName('text');
// for(let i = 0; i <= paragraf.length; i++) {
//    paragraf[1].style.color = "green"
// }

// const Element = document.getElementsByClassName("text");
// Element.classList.add("btn")
// Element.classList.add("btn-secondary")

const element = document.getElementsByClassName("text");
element[0].classList.add("btn")
element[0].classList.add("btn-danger")

const paragraf = document.querySelectorAll(".text")
for(let i = 0; i <= paragraf.length; i++) {
   paragraf[i].style.color = "orange"
}
