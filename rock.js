const imageColl = [
  "./images/icon-paper.svg",
  "./images/icon-rock.svg",
  "./images/icon-scissors.svg",
];
let val = 0;
let rancom = 0;
let count = 0;

function myFuction(value) {
  rancom = Math.floor(Math.random() * 3);
  let game = document.getElementById("game");
  game.style.display = "none";
  let comvsyou = document.getElementById("youvscom");
  comvsyou.style.visibility = "visible";
  val = value;
  let img1 = document.getElementById("showpic1");
  let img2 = document.getElementById("showpic2");
  img1.src = imageColl[val];
  img2.src = imageColl[rancom];
  let out = document.getElementById("iswin");
  if (value == 1 && rancom == 0) {
    out.innerHTML = "You Loose";
  } else if (value == 0 && rancom == 2) {
    out.innerHTML = "You Loose";
  } else if (value == 2 && rancom == 1) {
    out.innerHTML = "You Loose";
  } else if (value == rancom) {
    out.innerHTML = "Draw Match";
  } else {
    out.innerHTML = "You Win";
    count++;
  }

  let score = document.getElementById("__gamescorevalue");
  score.innerHTML = count;
}

function reverseMyfunction() {
  let comvsyou = document.getElementById("youvscom");
  comvsyou.style.visibility = "hidden";
  let game = document.getElementById("game");
  game.style.display = "block";
  game.style.visibility = "visible";
}
