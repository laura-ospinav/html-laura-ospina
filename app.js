document.addEventListener("DOMContentLoaded", () => {});
const cardAdj = [
  {
    name: "a",
    img: "images/a.png"
  }
];
[
  {
    name: "b",
    img: "images/b.png"
  }
];
[
  {
    name: "c",
    img: "images/c.png"
  }
];
[
  {
    name: "d",
    img: "images/d.png"
  }
];
[
  {
    name: "e",
    img: "images/e.png"
  }
];
[
  {
    name: "f",
    img: "images/f.png"
  }
];

const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas = [];
var cartasEscogidasId = [];
var cartasGanadas = [];

});
//-----------------lecture_03--------------//

funtion creartablero() {
  for(let i=0; i<cardAdj.length;i++) {
    var carta= document.createElement("img");
    carta.setAttribute("src","images/reverso.png");
    carta.setAttribute("data-id", i);
    carta.addEventListener("click", voltearCarta);
    cuadricula.appendChild(carta);
  }
}
