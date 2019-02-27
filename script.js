//Level 1
let dot1 = document.getElementById("dot1-level1");
let dot2 = document.getElementById("dot2-level1");
let dot3 = document.getElementById("dot3-level1");
let bckgrnClick = document.getElementById("kotak-level1");

//lives
let hati1 = document.getElementById("live1");
let hati2 = document.getElementById("live2");
let hati3 = document.getElementById("live3");
let arrHati = [hati1, hati2, hati3]
let idx = 0;

function PickDote1() {
    alert('Yeay, Next Level!');
    document.getElementById("level-1").style.display = "None"
    document.getElementById("level-2").style.display = "Block"
}

function PickDote2() {
    arrHati[idx].style.opacity = 0;
    idx += 1;
    if (idx >=3) {
        alert ("GAME OVER")
    };
}

function PickDote3() {
    arrHati[idx].style.opacity = 0;
    idx += 1;
    if (idx >=3) {
        alert ("GAME OVER")
    };
}

function PickDote4() {
    arrHati[idx].style.opacity = 0;
    idx += 1;
    if (idx >=3) {
        alert ("GAME OVER")
    };
}