let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStat = document.querySelector("#monsterStat");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("#monsterHealthText");

const location = [
  {
    name: "town square",
    "button text": ["go store", "go cave", "fight dragon"],
    "button function": ["goStore", "goCave", "fightDragon"],
    text: "You are in the town square. You see a sign that says \"store\""
  },
  {
    name: "store",
    "button text": ["Buy 10 health(10gold)","Buy weapon(30gold)", "Go to town square"],
    "button function": ["buyHealth", "buyWeapon", "goTown"],
    text: "You enter the store"
  }
]

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = "go to store";
  button2.innerText = "go to cave";
  button3.innerText = "fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"store\".";
};

function goTown() {
  
};

function goStore() {
  
};

function goCave() {
  console.log("Going to cave")
};

function fightDragon() {
  console.log("Fighting dragon")
};

function buyHealth() {
  
};

function buyWeapon() {
  
};