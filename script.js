// let start = document.getElementsByClassName("startGameButton");
// let love1 = document.getElementById("love1");
// let love2 = document.getElementById("love2");
// let love3 = document.getElementById("love3");
// let amateur = document.getElementById("amateurstat").checked;
// let beginner = document.getElementById("beginnerstat").checked;
// let pro = document.getElementById("prostat").checked;
// let arrLove = [love1,love2,love3]
// idxLove = 0
// start.addEventListener("click", move);

//pageGame
let level1 = document.getElementById("level-1");
let level2 = document.getElementById("level-2");
let level3 = document.getElementById("level-3");
arrlevel = [level1, level2, level3, level4];

//dot
let dot1 = document.getElementById("dot1-level1");
let dot2 = document.getElementById("dot2-level1");
let dot3 = document.getElementById("dot3-level1");
let dot4 = document.getElementById("dot4-level1");
let bckgrnClick = document.getElementById("kotak-level1");

//lives
let hati1 = document.getElementById("live1");
let hati2 = document.getElementById("live2");
let hati3 = document.getElementById("live3");
let arrHati = [hati1, hati2, hati3]
let idx = 0;


function move() {
  document.getElementById("level-live").style.display = "Block"
    document.getElementById("level-0").style.display = "None"
    document.getElementById("level-1").style.display = "Block"
    
    let amateur = document.getElementById("amateurstat").checked;
    let beginner = document.getElementById("beginnerstat").checked;
    let speed =200;
    
    if (amateur == true){
        speed = 200;
    } else if (beginner == true){
        speed = 50;
    } else{
        speed = 10;
    }

    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, speed);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        alert('game over')
        location.reload();
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }
    }
}


function PickDote1() {
  alert('Yeay, Next Level!');
  document.getElementById("level-1").style.display = "None"
  document.getElementById("level-2").style.display = "Block"
}

function PickDote2() {
  alert(arrHati[idx])
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER")
      location.reload();
  };
}

function PickDote3() {
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER")
      location.reload();
  };
}

function PickDote4() {
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER")
      location.reload();
  };
};

//--------------------------------------------Level 2

function PickDote5(){
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER")
  };
};

//H1 click
h1lev2 = document.getElementById(onceAgain)
function H1level2(){
  alert('Yeay, Next Level!');
  arrlevel[0].style.display = "None"
  arrlevel[1].style.display = "None"
  arrlevel[2].style.display = "Block"
};

//--------------------------------------------Level 3
//circle blue
function PickDote6() {
  alert('Yeay, Next Level!');
  arrlevel[0].style.display = "None"
  arrlevel[1].style.display = "None"
  arrlevel[2].style.display = "None"
  arrlevel[3].style.display = "Block"
};