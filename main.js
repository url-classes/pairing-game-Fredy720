let icons = [];
let selecctions = [];
let cont = 0;
let level = 12;
let lastLevel;
let gradient =
  "background: linear-gradient(hsl(34, 82%, 57%), hsl(34, 82%, 54%));";
let gradientHover =
  "background: linear-gradient(hsl(34, 82%, 47%), hsl(34, 82%, 44%));";
let btn = document.querySelectorAll("button");
let h1 = document.querySelector("h1");
let ad;

createPanel(20);

function loadIcons() {
  icons = [
    `<img class='cards' src= './Images/1.png'/> `,  
    `<img class='cards' src= './Images/2.png'/> `,
    `<img class='cards' src= './Images/3.png'/> `,
    `<img class='cards' src= './Images/4.png'/> `,
    `<img class='cards' src= './Images/5.png'/> `,
    `<img class='cards' src= './Images/6.png'/> `,
    `<img class='cards' src= './Images/7.png'/> `,
    `<img class='cards' src= './Images/8.png'/> `,
    `<img class='cards' src= './Images/9.png'/> `,
    `<img class='cards' src= './Images/10.png'/> `,
  ];
}

function createPanel(selectedLevel) {
  selecctions = [];
  loadIcons();
  if (selectedLevel == 24) {
    btn[0].setAttribute("style", gradient);
  }

  level = selectedLevel;
  lastLevel = level;

  let panel = document.getElementById("panel");
  let cards = [];

  for (let i = 0; i < selectedLevel; i++) {
    cards.push(
      `<div class="card-area" onclick="selectCard(${i})">
                <div class="card" id="card${i}">
                    <div class="card-face back-face" id="back-face${i}">
                        ${icons[0]}
                    </div>
                    <div class="card-face front-face">
                        <img src="Images/ask.png" alt="Signo de pregunta">
                    </div>
                </div>
            </div>`
    );
    if (i % 2 == 1) {
      icons.splice(0, 1);
    }
  }
  cards.sort(() => Math.random() - 0.5);
  panel.innerHTML = cards.join(" ");
}

function selectCard(i) {
  let card = document.getElementById("card" + i);

  if (card.style.transform != "rotateY(180deg)") {
    card.style.transform = "rotateY(180deg)";
    selecctions.push(i);
  }

  if (selecctions.length == 2) {
    deselect(selecctions);
    selecctions = [];
  }
}

function deselect(selections) {
  setTimeout(() => {
    let backFace1 = document.getElementById("back-face" + selections[0]);
    let backFace2 = document.getElementById("back-face" + selections[1]);

    if (backFace1.innerHTML != backFace2.innerHTML) {
      let card1 = document.getElementById("card" + selections[0]);
      let card2 = document.getElementById("card" + selections[1]);
      card1.style.transform = "rotateY(0deg)";
      card2.style.transform = "rotateY(0deg)";
    } else {
      backFace1.style.background = "green";
      backFace2.style.background = "green";
      cont += 2;

      if (cont == level) {
        Swal.fire("Has Ganado!", "Felicidades!", "success");
        cont = 0;
      }
    }
  }, 500);
}
