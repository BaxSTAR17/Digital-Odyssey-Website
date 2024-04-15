let bgm = new Audio("./images/Inst.ogg");

function deleteBlur(id) {
    document.getElementById(id).style.opacity = 1;
}

let items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function showItem(slot) {
    items[slot]++;
    document.querySelector(`.slot:nth-of-type(${slot}) .item1`).style.opacity = 0;
    document.querySelector(`.slot:nth-of-type(${slot}) .item2`).style.opacity = 0;
    document.querySelector(`.slot:nth-of-type(${slot}) .item3`).style.opacity = 0;
    document.querySelector(`.slot:nth-of-type(${slot}) .item4`).style.opacity = 0;
    document.querySelector(`.slot:nth-of-type(${slot}) .item${items[slot]%4+1}`).style.opacity = 1;
}

function changeSpecs(n) {
    switch(n) {
        case 1:
            document.querySelector(".shelter.desc").textContent = "The Roof is essential for overhead protection especially from weather!";
            document.querySelector(".d").style.backgroundImage = "url('./images/shelter.gif')"; 
            break;
        case 2:
            document.querySelector(".shelter.desc").textContent = "Power and lights help increase the quality of living in your humble abode";
            break;
        case 3:
            document.querySelector(".shelter.desc").textContent = "Furniture is helpful to make you feel comfortable especially during meal times";
            break;
        case 4:
            document.querySelector(".shelter.desc").textContent = "Windows and Doors are essential for linking our connection with the outside world while staying essentially safe!";
            break;
        case 5:
            document.querySelector(".shelter.desc").textContent = "The Foundation provides stability and the fundamental strength of the shelter on the grounds";
            break;
    }
}

function weaponslot(n) {
    console.log(n)
    switch (n) {
        case 1:
            document.querySelector(".weapon").style.backgroundImage = "url('./images/warhammer.png');"
            break;
        case 2:
            document.querySelector(".weapon").style.backgroundImage = "url('./images/ironsword.png');"
            break;
        case 3:
            document.querySelector(".weapon").style.backgroundImage = "url('./images/axe.png');"
            break;
        case 4:
            document.querySelector(".weapon").style.backgroundImage = "url('./images/hammer.png');"
            break;
        case 5:
            document.querySelector(".weapon").style.backgroundImage = "url('./images/mace.png');"
            break;
    }
}

// document.querySelector(".book .d").addEventListener("onmouseover", function(e) {
//     document.querySelector(".weapon").style.top = `${e.clientY}px`
//     document.querySelector(".weapon").style.left = `${e.clientX}px`
// });

document.addEventListener("load", function() {
    bgm.play();
})