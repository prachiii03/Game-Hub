let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let gotomenu = document.querySelector("#go-to-menu");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulation,Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
        return true;
      }
    }
  }
};

newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

gotomenu.addEventListener("click", () => {
  // code to go to the main menu here
  window.open("Menu.html", "_self");
});
