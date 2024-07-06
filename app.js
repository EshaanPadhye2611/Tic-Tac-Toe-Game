
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
let count =0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        // alert("Box was clicked");
        // console.log("box was clicked");
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

       let winner =  checkWinner();
       if (count === 9  && !winner){
          gameDraw();
       }
    });
});
    
     const gameDraw = () =>{
        msg.innerText=`Game Drawn !!!`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
     }

    const disableBoxes = () =>{
        for( let box of boxes){
            box.disabled = true;
        }
    };

    const enableBoxes = () =>{
        for ( let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) =>{
        msg.innerText=`Congratulations the winner is ${winner} !!!`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    };

    const checkWinner= () =>{
        for(let pattern of winPatterns){
          let pos1=boxes[pattern[0]].innerText;
          let pos2=boxes[pattern[1]].innerText;
          let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
               console.log("Winner",pos1);
               showWinner(pos1);
               return true;
            }
        }
    };
}

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
