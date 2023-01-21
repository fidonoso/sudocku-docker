import { ocurrencias, tablero } from "./utils.js";
import particulitas from "./particulas.js";

particlesJS(particulitas);

//variables globales
let numSelecionado = null;
let tileSelected = null;
let limiteErrores = 10;
let numerosCompletados = 0;

let errors = 0;

///generar tablero y solucion
const ss = tablero();
console.log(ss);
const board = [...ss[0]];
const solution = [...ss[1]];

const faltan = [];

for (let i = 1; i < 10; i++) {
  faltan.push(ocurrencias(board, i));
}

window.onload = () => {
  juego();
};

const juego = () => {
  //numeros para elegir
  for (let i = 1; i < 10; i++) {
    let numeros = document.getElementById("numeros");
    let div = document.createElement("div");
    div.classList.add("container-numero");
    div.id = `container-numero_${i}`;
    let div2 = document.createElement("div");
    div2.classList.add("numero");
    div2.innerHTML = i;
    div2.id = i;
    div.addEventListener("click", numero_elegido);
    div.appendChild(div2);

    let div3 = document.createElement("div");
    div3.innerHTML = faltan[i - 1];
    div3.classList.add("cantidad-faltante");
    div.appendChild(div3);

    numeros.appendChild(div);
  }

  //tablero
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let casilla = document.createElement("div");
      casilla.id = i.toString() + "-" + j.toString();
      if (board[i][j] != "-") {
        casilla.innerText = board[i][j];
        casilla.classList.add("casilla-existente");
      }
      if (i == 2 || i == 5) {
        casilla.classList.add("linea-horizontal");
      }
      if (j == 2 || j == 5) {
        casilla.classList.add("linea-vertical");
      }
      casilla.addEventListener("click", casillaSeleccionada);
      casilla.classList.add("casilla");
      document.getElementById("tablero").append(casilla);
    }
  }
};

function numero_elegido() {
  if (numSelecionado != null) {
    // console.log('aca=>',numSelecionado)
    numSelecionado.classList.remove("numero-seleccionado");
    // numSelecionado.parentNode.classList.remove("numero-seleccionado");
  }
  numSelecionado = this;
  console.log("Nodo del numero seleccionado==>", numSelecionado);
  numSelecionado.classList.add("numero-seleccionado");
}

//al hacer click en una casilla del tablero
function casillaSeleccionada() {
  try {
    numSelecionado.firstChild;
  } catch (error) {
    alert("debe elegin un numero");
    return;
  }

  if (numSelecionado.firstChild) {
    if (
      this.className.includes("casilla-existente") ||
      this.className.includes("casilla-correcta")
    ) {
      console.log("aca", this);
      console.log(this.className.includes("casilla-existente"));
      return;
    }

    // "0-0" "8-8"
    let posicion = this.id.split("-"); //["0", "0"]... ["8","8"]
    let fila = parseInt(posicion[0]);
    let columna = parseInt(posicion[1]);

    console.log(
      "solucion=>",
      solution[fila][columna],
      "seleccionado=>",
      numSelecionado.firstChild.innerHTML
    );
    //si coincide con la solucion
    if (solution[fila][columna] == numSelecionado.firstChild.innerHTML) {
      this.innerText = numSelecionado.firstChild.innerHTML;
      this.classList.remove("lugarError");
      this.classList.add("casilla-correcta");
      let restante = parseInt(numSelecionado.children[1].innerHTML);
      numSelecionado.children[1].innerHTML = restante - 1;
      //Si se usaron todos los numeros
      if (restante - 1 == 0) {
        numerosCompletados += 1;
        comprobarVictoria();
        numSelecionado.classList.add("completo");
      }
    } else {
      //si no coincide con la solucion
      errors += 1;
      document.getElementById("errors").innerText = errors;
      this.innerText = numSelecionado.firstChild.innerHTML;
      this.classList.add("lugarError");
      if (errors == limiteErrores) {
        // alert('10 errores \n Game over')
        const modal = document.querySelector(".modal");
        const img = document.querySelector(".modal__img");
        const texto = document.querySelector(".modal__paragraph");
        texto.innerHTML = "Has tenido 10 errores";
        img.src = "Game-Over.png";
        modal.classList.add("modal--show");

        document
          .querySelector(".modal__close")
          .addEventListener("click", () => {
            location.reload();
          });
      }
    }
  }
}

const comprobarVictoria = () => {
  console.log("numerosCompletados==>", numerosCompletados);
  if (numerosCompletados == 9) {
    const modal = document.querySelector(".modal");
    const img = document.querySelector(".modal__img");
    img.src = "winner.png";
    const texto = document.querySelector(".modal__paragraph");
    texto.innerHTML = "Has Ganado !!!";
    modal.classList.add("modal--show");

    document.querySelector(".modal__close").addEventListener("click", () => {
      document.getElementById("btn-reset").style.display = "inline";
      document.getElementById("btn-reset").addEventListener("click", () => {
        location.reload();
      });
      modal.classList.remove("modal--show");
    });
  }
};
