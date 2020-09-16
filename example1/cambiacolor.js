const capa = document.querySelector('#capacolor');

function cambiadecolor() {
  const rojo = parseInt(Math.random() * 255);
  const verde = parseInt(Math.random() * 255);
  const azul = parseInt(Math.random() * 255);
  const alfa = Math.random();
  const newcolor = `rgba(${rojo}, ${verde}, ${azul}, ${alfa})`;
  capa.style.background = newcolor;
}

document.querySelector('#buttoncolor').addEventListener('click', cambiadecolor);