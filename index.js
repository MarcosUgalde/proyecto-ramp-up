window.onload = function () {
  console.log("Todo listo!");
  randomNumber();
  prepareSelectorButton();
  prepareSelectorButton2();
  prepareAttackButton();
  prepareDefenseButton();
  prepareFightButton();
  prepareRefreshButton();
  // attack();
  // battle();
};
const goku = {
  id: "goku",
  name: "Son Goku",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 1,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

goku.image1.src = "sprites/goku-player-sprite.gif";

const vegeta = {
  id: "vegeta",
  name: "Vegeta",
  vit: 100,
  strength: 15,
  defense: 8,
  number: 2,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

vegeta.image1.src = "sprites/vegeta-player-sprite.png";
vegeta.image2.src = "sprites/vegeta-enemy-sprite.png";

const piccolo = {
  id: "piccolo",
  name: "Piccolo",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 3,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

piccolo.image1.src = "sprites/piccolo-player-sprite.gif";
piccolo.image2.src = "sprites/piccolo-enemy-sprite.gif";

const gohan = {
  id: "gohan",
  name: "Son Gohan",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 4,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

gohan.image1.src = "sprites/kid-gohan-player-sprite.png";
gohan.image2.src = "sprites/kid-gohan-enemy-sprite.png";

const videl = {
  id: "videl",
  name: "Videl",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 5,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

videl.image1.src = "sprites/videl-player-sprite.png";

const a18 = {
  id: "a18",
  name: "A-18",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 6,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

a18.image1.src = "sprites/a18-player-sprite.png";
a18.image2.src = "sprites/a18-enemy-sprite.png";

const trunks = {
  id: "trunks",
  name: "Trunks",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 7,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

trunks.image1.src = "sprites/future-trunks-player-sprite.png";
trunks.image2.src = "sprites/trunks-enemy-sprite.png";

const freezer = {
  id: "freezer",
  name: "Freezer",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 8,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

freezer.image1.src = "sprites/freezer-player-sprite.gif";
freezer.image2.src = "sprites/freezer-enemy-sprite.png";

const cell = {
  id: "cell",
  name: "Cell",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 9,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

cell.image1.src = "sprites/cell-player-sprite.png";
cell.image2.src = "sprites/cell-enemy-sprite.png";

const buu = {
  id: "buu",
  name: "Majin Buu",
  vit: 100,
  strength: 15,
  defense: 5,
  number: 10,
  selected: false,
  image1: new Image(),
  image2: new Image(),
};

buu.image1.src = "sprites/majin-buu-player-sprite.gif";

let characters = [
  goku,
  vegeta,
  piccolo,
  gohan,
  videl,
  a18,
  trunks,
  freezer,
  cell,
  buu,
];

const mainMenu = document.querySelector(".main-menu");
const battleArena = document.querySelector(".battle-arena");

const container = document.querySelector(".container");
const enemyContainer = document.querySelector(".enemy-container");

const playerGround = document.querySelector(".player-ground");
let playerImage = document.querySelector(".player");

const enemyGround = document.querySelector(".enemy-ground");
let enemyImage = document.querySelector(".enemy");

let finalBox = document.querySelector(".finished");
let finalText = document.querySelector("#final-text");

function prepareFightButton() {
  const fightButton = document.querySelector("#fight");
  fightButton.addEventListener("click", function () {
    mainMenu.classList.replace("visible", "hidden");
    battleArena.classList.add("visible");
    console.log("displaying battle arena");
    battleArena.scrollIntoView();
  });
}

function prepareRefreshButton() {
  const refreshButton = document.querySelector("#volver");
  refreshButton.addEventListener("click", function () {
    window.location.reload();
    mainMenu.scrollIntoView();
  });
}

// Creo una variable player y una variable enemy. Hasta que no esté implementada el selector de pesonajes van a ser vegeta y a18

let player = vegeta;
let enemy = a18;

const vitPlayer = document.querySelector("#vit-player");
vitPlayer.innerHTML = `${player.name}: ${player.vit}`;

const vitComputer = document.querySelector("#vit-computer");
vitComputer.innerHTML = `${enemy.name}: ${enemy.vit}`;

function randomNumber() {
  let number = Math.floor(Math.random() * 10);
  return number;
}

function prepareSelectorButton() {
  const selectorButton = document.querySelectorAll(".selector");
  for (const button of selectorButton) {
    button.addEventListener("click", function () {
      let id = button.id;
      container.classList.replace("unselected", "selected");
      console.log("still working");
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
          player = characters[i];
          playerImage.src = player.image1.src;
          vitPlayer.innerHTML = `${player.name}: ${player.vit}`;
        }
      }
      console.log(`player now is ${player.name}`);
    });
  }
}

function prepareSelectorButton2() {
  const selectorButton = document.querySelectorAll(".selector2");
  for (const button of selectorButton) {
    button.addEventListener("click", function () {
      let id = button.id;
      console.log(id);
      enemyContainer.classList.replace("unselected", "selected");
      console.log("still working");
      for (let i = 0; i < characters.length; i++) {
        if (characters[i].id === id) {
          enemy = characters[i];
          enemyImage.src = enemy.image2.src;
          vitComputer.innerHTML = `${enemy.name}: ${enemy.vit}`;
        }
      }
      console.log(`you are fighting against ${enemy.name}`);
    });
  }
}

// Aqui creo las funciones para el escenario de combate

//creo la variable que mira si está movido o no
let isMoved = false;

//meter el add event listener en el while loop podría dar problemas, aunque técnicamente sea posible
function prepareAttackButton() {
  const attackButton = document.querySelector("#attack");
  attackButton.addEventListener("click", function () {
    let punchAudio = document.querySelector("#punch");
    punchAudio.play();
    if (!isMoved) {
      playerImage.classList.add("attack-right");
      enemyImage.classList.add("attack-left");
    } else {
      playerImage.classList.remove("attack-right");
      enemyImage.classList.remove("attack-left");
    }
    isMoved = !isMoved;
    let ran = randomNumber();
    console.log(`random number is ${ran}`);
    console.log(`${player.name} lucky number is ${player.number}`);
    console.log(`${enemy.name} lucky number is ${enemy.number}`);
    // if (enemy.vit > 0) {
    if (ran === player.number) {
      enemy.vit = enemy.vit - 25;
      console.log(`${player.name} ha dado un golpe crítico`);
    }
    if (ran > 8 && ran !== enemy.number) {
      enemy.vit = enemy.vit + enemy.defense;
      player.vit = player.vit + (enemy.strength - player.defense);
      console.log(`${enemy.name} se ha defendido`);
    }
    enemy.vit = enemy.vit - (player.strength - enemy.defense);
    console.log(`${enemy.name} vit remaining: ${enemy.vit}`);
    vitComputer.innerHTML = `${enemy.name}: ${enemy.vit}`;
    if (enemy.vit < 1) {
      console.log(`${player.name} wins!`);
      vitComputer.innerHTML = `${enemy.name}: 0`;
      finalBox.classList.add("visible");
      finalText.innerHTML = `¡Enhorabuena! ¡${player.name} ha ganado!`;
      battleArena.classList.replace("visible", "hidden");
      finalBox.scrollIntoView();
    }
    //}
    //   if (player.vit > 0) {
    if (ran === enemy.number) {
      player.vit = player.vit - 30;
      console.log(`${enemy.name} ha dado un golpe crítico`);
    }
    player.vit = player.vit - (enemy.strength - player.defense);
    console.log(`${player.name} vit remaining: ${player.vit}`);
    vitPlayer.innerHTML = `${player.name}: ${player.vit}`;

    if (player.vit < 1) {
      console.log(`${player.name} loses!`);
      vitPlayer.innerHTML = `${player.name}: 0`;
      finalBox.classList.add("visible");
      finalText.innerHTML = `¡Has perdido! ¡${enemy.name} gana!`;
      battleArena.classList.replace("visible", "hidden");
      finalBox.scrollIntoView();
    }
    //  }
  });
}

function prepareDefenseButton() {
  const defenseButton = document.querySelector("#defense");
  defenseButton.addEventListener("click", function () {
    let punchAudio = document.querySelector("#punch");
    punchAudio.play();
    let ran = randomNumber();
    console.log(`Random number is ${ran}`);
    if (ran === enemy.number) {
      player.vit = player.vit - 30;
      console.log(`${enemy.name} ha dado un golpe crítico`);
    } else if (ran !== enemy.number) {
      player.vit = player.vit - (enemy.strength - player.defense - 4);
    }
    console.log(`${enemy.name} number is ${enemy.number}`);
    vitPlayer.innerHTML = `${player.name}: ${player.vit}`;
    console.log(`${player.name} vit remaining: ${player.vit}`);
    if (player.vit < 1) {
      vitPlayer.innerHTML = `${player.name}: 0`;
      console.log(`${player.name} loses`);
      finalBox.classList.add("visible");
      finalText.innerHTML = `¡Has perdido! ¡${enemy.name} gana!`;
      battleArena.classList.replace("visible", "hidden");
      finalBox.scrollIntoView();
    }
  });
}
