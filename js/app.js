const rulesButton = document.querySelector(".but");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const shape = document.querySelector(".shape");
const step2 = document.querySelector(".step2");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
const draw = document.querySelector(".draw");
const playagain = document.querySelector(".play");
const score = document.querySelector(".score");

const paper = document.querySelector(".icon-paper");
const scissors = document.querySelector(".icon-scissors");
const rock = document.querySelector(".icon-rock");
const list = ["icon-paper", "icon-scissors", "icon-rock"];
let sclist = [];
let sc = 0;

const action1 = evt => {
    evt.preventDefault();
    modal.classList.remove("off");
};

const action2 = evt => {
    evt.preventDefault();
    modal.classList.add("off");
};

const action3 = evt => {
    evt.preventDefault();
    console.log(evt.target);
    let item = Array.from(evt.target.classList)[1];
    console.log(item);
    shape.classList.add("off");
    if (item === "icon-paper") {
        step2.children[0].children[1].src = "images/icon-paper.svg";
    }
    if (item === "icon-scissors") {
        step2.children[0].children[1].src = "images/icon-scissors.svg";
    }
    if (item === "icon-rock") {
        step2.children[0].children[1].src = "images/icon-rock.svg";
        //step2.children[0].children[1].classList.add("icon1")
    }

    let num = Math.round(Math.random() * 2);
    let newitem = list[num];

    if (newitem === "icon-paper") {
        step2.children[2].children[1].src = "images/icon-paper.svg";
    }
    if (newitem === "icon-scissors") {
        step2.children[2].children[1].src = "images/icon-scissors.svg";
    }
    if (newitem === "icon-rock") {
        step2.children[2].children[1].src = "images/icon-rock.svg";

        //step2.children[2].children[1].classList.add("icon1")
    }

    action4(evt, item, newitem);

    step2.classList.remove("off");
};

const action4 = (evt, item, newitem) => {
    if (
        (item === "icon-paper" && newitem === "icon-rock") ||
        (item === "icon-rock" && newitem === "icon-scissors") ||
        (item === "icon-scissors" && newitem === "icon-paper")
    ) {
        sc++;
        score.innerHTML = sc;
        evt.target.classList.add("mg");
        win.classList.remove("off");
        playagain.classList.remove("off");
        playagain.classList.remove("playl");
        playagain.classList.add("playw");
    } else if (
        (item === "icon-paper" && newitem === "icon-paper") ||
        (item === "icon-rock" && newitem === "icon-rock") ||
        (item === "icon-scissors" && newitem === "icon-scissors")
    ) {
        draw.classList.remove("off");
        playagain.classList.remove("off");
        playagain.classList.remove("playw");
        playagain.classList.add("playl");
    } else {
        lose.classList.remove("off");
        playagain.classList.remove("off");
        playagain.classList.remove("playw");
        playagain.classList.add("playl");
    }
};

const action5 = () => {
    step2.classList.add("off");
    playagain.classList.add("off");
    win.classList.add("off");
    lose.classList.add("off");
    draw.classList.add("off");
    shape.classList.remove("off");
    sclist = [];
};

rulesButton.addEventListener("click", action1);
close.addEventListener("click", action2);
paper.addEventListener("click", action3);
rock.addEventListener("click", action3);
scissors.addEventListener("click", action3);
playagain.addEventListener("click", action5);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => {
                console.log('Service Worker Registered')
            })
            .catch(err => console.log('Service Worker not registered'))
    })
}