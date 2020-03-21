const rulesButton = document.querySelector(".but");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const shape = document.querySelector(".shape");
const step2 = document.querySelector(".step2");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose")
const playagain = document.querySelector(".play")
const score = document.querySelector(".score");

const paper = document.querySelector(".icon-paper");
const scissors = document.querySelector(".icon-scissors");
const rock = document.querySelector(".icon-rock");
const list = ["icon-paper", "icon-scissors", "icon-rock"];
let sclist = [];
let sc = 0


const action1 = (evt) => {
    evt.preventDefault()
    modal.classList.remove("off")
}

const action2 = (evt) => {
    evt.preventDefault()
    modal.classList.add("off")
}

const action3 = (evt) => {
    evt.preventDefault()
    console.log(evt.target)
    let item = Array.from(evt.target.classList)[1]
    console.log(item)
    shape.classList.add("off")
    if (item === "icon-paper") {
        step2.children[0].children[1].src = "images/icon-paper.svg"
    }
    if (item === "icon-scissors") {
        step2.children[0].children[1].src = "images/icon-scissors.svg"
    }
    if (item === "icon-rock") {
        step2.children[0].children[1].src = "images/icon-rock.svg"
        //step2.children[0].children[1].classList.add("icon1")
    }

    for (let piece of list) {
        if (piece !== item) {
            sclist.push(piece)
        }
    }

    console.log(sclist)

    let num = Math.round(Math.random() * 1)
    let newitem = sclist[num]

    if (newitem === "icon-paper") {
        step2.children[2].children[1].src = "images/icon-paper.svg"
    }
    if (newitem === "icon-scissors") {
        step2.children[2].children[1].src = "images/icon-scissors.svg"
    }
    if (newitem === "icon-rock") {
        step2.children[2].children[1].src = "images/icon-rock.svg"
        //step2.children[2].children[1].classList.add("icon1")
    }


    action4(item, newitem)


    step2.classList.remove("off")

}

const action4 = (item, newitem) => {
    if (item === "icon-paper" && newitem === "icon-rock" ||
        item === "icon-rock" && newitem === "icon-scissors" ||
        item === "icon-scissors" && newitem === "icon-paper") {
        sc++
        score.innerHTML = sc
        win.classList.remove("off")
        playagain.classList.remove("off")
        playagain.classList.remove("playl")
        playagain.classList.add("playw")

    } else {
        lose.classList.remove("off")
        playagain.classList.remove("off")
        playagain.classList.remove("playw")
        playagain.classList.add("playl")

    }
}

const action5 = () => {
    step2.classList.add("off");
    playagain.classList.add("off");
    win.classList.add("off");
    lose.classList.add("off");
    shape.classList.remove("off");
    sclist = [];
}




rulesButton.addEventListener("click", action1)
close.addEventListener("click", action2)
paper.addEventListener("click", action3)
rock.addEventListener("click", action3)
scissors.addEventListener("click", action3)
playagain.addEventListener("click", action5)