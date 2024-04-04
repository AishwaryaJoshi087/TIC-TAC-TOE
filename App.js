let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let mesCont = document.querySelector(".msg_cont");
let msg = document.querySelector("#msg");

let turn0 = true;//X,O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const Resetgame = () => {
    turn0 = true;
    enableBoxed();
    mesCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwin();
    });
});

const disableBoxed = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxed = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}
const showwinner = (winner) => {
    msg.innerText = `Congratulations.Winner is ${winner}`;
    mesCont.classList.remove("hide");
    disableBoxed();
}

const checkwin = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                console.log("Winner", pos1);
                showwinner(pos1);
            }
        }
    }
}

newGamebtn.addEventListener("click",Resetgame);
resetbtn.addEventListener("click",Resetgame);