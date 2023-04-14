document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "a[1]",
      img: "images/a[1].png"
    },
    {
      name: "b[1]",
      img: "images/b[1].jpg"
    },
    {
      name: "c[1]",
      img: "images/c[1].png"
    },

    {
      name: "d[1]",
      img: "images/d[1].png"
    },
    {
      name: "e[1]",
      img: "images/e[1].png"
    },
    {
      name: "f[1]",
      img: "images/f[1].jpg"
    },
    {
      name: "a[1]",
      img: "images/a[1].png"
    },
    {
      name: "b[1]",
      img: "images/b[1].jpg"
    },
    {
      name: "c[1]",
      img: "images/c[1].png"
    },

    {
      name: "d[1]",
      img: "images/d[1].png"
    },
    {
      name: "e[1]",
      img: "images/e[1].png"
    },
    {
      name: "f[1]",
      img: "images/f[1].jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //-----------------lecture_03--------------//

  function creartablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
//-----------------------lecture_04------------------------//
function verificarpareja(){
  var cards = document.querySelectorAll("img");
  const opcionUnoId = cartasEscogidasId[0];
  const opcionDosId = cartasEscogidasId[1];

if (opcionUnoId === opcionDosId) {
  cards[opcionUnoId].setAttribute("src","images/reverso.png");
  cards[opcionDosId].setAttribute("src","images/reverso.png");
alert("¡Diste click a la misma imagen!");
} else if (cartasEscogidas[0]=== cartasEscogidas[1]) {
  alert("¡correcto!");
  cards[opcionUnoId].setAttribute("src","images/blank.png");
  cards[opcionDosId].setAttribute("src","images/blank.png");
  cards[opcionUnoId].removeEventListener("click",voltearCarta);
  cards[opcionDosId].removeEventListener("click",voltearCarta);
  cartasGanadas.push(cartasEscogidas);
} else {
  cards[opcionUnoId].setAttribute("src","images/reverso.png");
  cards[opcionDosId].setAttribute("src","images/reverso.png");
alert("¡intenta de nuevo!");
}
cartasEscogidas = [];
cartasEscogidasId = [];

resultado.textContent = cartasGanadas.length;

if(cartasGanadas.length === cardAdj.length / 2){
  resultado.textContent = "¡Felicidades, econcontraste todos los pares!";
  }
}

  //---------------------lecture 05---------------//

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarpareja, 1000);
    }
  }
  creartablero();
});
