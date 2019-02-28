//Level 1
let dot1 = document.getElementById("dot1-level1");
let dot2 = document.getElementById("dot2-level1");
let dot3 = document.getElementById("dot3-level1");
let bckgrnClick = document.getElementById("kotak-level1");

//lives
let hati1 = document.getElementById("live1");
let hati2 = document.getElementById("live2");
let hati3 = document.getElementById("live3");
let arrHati = [hati1, hati2, hati3];
let idx = 0;

//pageGame
let level1 = document.getElementById("level-1");
let level2 = document.getElementById("level-2");
let level3 = document.getElementById("level-3");
arrlevel = [level1, level2, level3];

var globalVar = true;

/****************************************************************** */

$(document).ready(function(){
  animateDiv('#dot1-level1');
  animateDiv('#dot2-level1');
  animateDiv('#dot3-level1');
  animateDiv('#dot4-level1');
  animateDiv('#dot1-level2');
  animateDiv('#dot2-level2');
  animateDiv('#dot3-level2');
  animateDiv('#dot4-level2');
  animateDiv('#dot1-level3');
  animateDiv('#dot2-level3');
  animateDiv('#dot3-level3');
  animateDiv('#dot4-level3');
  //
  animateDiv('#dot1a-level1');
  animateDiv('#dot2a-level1');
  animateDiv('#dot3a-level1');
  animateDiv('#dot4a-level1');
  animateDiv('#dot1a-level2');
  animateDiv('#dot2a-level2');
  animateDiv('#dot3a-level2');
  animateDiv('#dot4a-level2');
  animateDiv('#dot1a-level3');
  animateDiv('#dot2a-level3');
  animateDiv('#dot3a-level3');
  animateDiv('#dot4a-level3');
  //
  animateDiv('#dot1b-level1');
  animateDiv('#dot2b-level1');
  animateDiv('#dot3b-level1');
  animateDiv('#dot4b-level1');
  animateDiv('#dot1b-level2');
  animateDiv('#dot2b-level2');
  animateDiv('#dot3b-level2');
  animateDiv('#dot4b-level2');
  animateDiv('#dot1b-level3');
  animateDiv('#dot2b-level3');
  animateDiv('#dot3b-level3');
  animateDiv('#dot4b-level3');
});

function makeNewPosition(){
  let h = -200;
  let w = -200;
  let nh = Math.floor(Math.random() * h);
  let nw = Math.floor(Math.random() * w);

  if (nh >= $(window).height()){
    nh = $(window).height()
  }

  if (nw >= $(window).width()){
    nw = $(window).width()
  }
  return [nh,nw];    
}

function animateDiv(myclass){
  let newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });
}

/********************************************************************* */

function init(){
    document.getElementById("iconLive").style.display = "Block";
    document.getElementById("level-0").style.display = "None";
    document.getElementById("level-1").style.display = "Block";
    move();
    move2();
    move3();
}

function move() {
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

    let elem = document.getElementById("myBar");   
    let width = 1;
    let id = setInterval(frame, speed);
    
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          alert('game over');
          location.reload();
        } else {
            width++; 
            elem.style.width = width + '%'; 
            elem.innerHTML = width * 1  + '%';
        }
      }
}

function move2() {
  // alert("masuk move 2 nih")
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

  let elem = document.getElementById("myBar2");   
  let width = 1;
  let id = setInterval(frame, speed);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      alert('game over');
      location.reload();
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function move3() {
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

  var elem = document.getElementById("myBar3");   
  var width = 1;
  var id = setInterval(frame, speed);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      alert('game over');
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
  document.getElementById("level-1").style.display = "None";
  document.getElementById("level-2").style.display = "Block";
  document.getElementById("level-3").style.display = "None";
  move2();
}

function PickDote2() {
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER");
      location.reload();
  };
}

function PickDote3() {
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER");
      location.reload();
  };
}

function PickDote4() {
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER");
      location.reload();
  };
}

//--------------------------------------------Level 2

function PickDote5(){
  arrHati[idx].style.opacity = 0;
  idx += 1;
  if (idx >=3) {
      alert ("GAME OVER");
  };
};

//H1 click
h1lev2 = document.getElementById(onceAgain);

function H1level2(){
  alert('Yeay, Next Level!');
  arrlevel[0].style.display = "None";
  arrlevel[1].style.display = "None";
  arrlevel[2].style.display = "Block";
  move3();
};

//--------------------------------------------Level 3
//circle blue
function PickDote6() {
  alert('Yeay, Menang!');
  arrlevel[0].style.display = "None";
  arrlevel[1].style.display = "None";
  arrlevel[2].style.display = "None";
  location.reload();
};

/******************************************************/