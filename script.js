/*variables*/

let currentPlayer;
let newElement = document.createElement('h3');
let stateArray;

let pos = document.querySelectorAll('.cell')
let restart = document.querySelector('#restartButton')

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*function for turns*/

function selector() {
    let s = document.querySelector('.selector');
    newElement.textContent = `chance of - ${currentPlayer}`;
    s.appendChild(newElement);
}

function togglePlayer() {
    if(currentPlayer == "X")
        currentPlayer = "O";
    else
     currentPlayer = "X"
}

/*fucntion for declaration*/

function declare(){
    newElement.textContent = `winner is - ${currentPlayer}`;
    for(box of pos){
        box.setAttribute("style","pointer-events:none");
    }
}

function declare2(){
    newElement.textContent = `tie. please restart.`;
    for(box of pos){
        box.setAttribute("style","pointer-events:none");
    }
}

/*status checking*/

function victoryStatus(){
    for(index of winningPositions){
        if((stateArray[index[0]]=="X"&&stateArray[index[1]]=="X"&&stateArray[index[2]]=="X")||(stateArray[index[0]]=="O"&&stateArray[index[1]]=="O"&&stateArray[index[2]]=="O")){
            pos[index[0]].classList.add('green');
            pos[index[1]].classList.add('green');
            pos[index[2]].classList.add('green');
            return true;
        }
    }
    return false;
}

function moveStatus(){
    for(index of stateArray){
        if(index == "")
        return false;
}
return true;
}

/*button handling*/

restart.addEventListener('click', ()=>{initialise()});

function onClick(index){
    if(stateArray[index]==""){
        stateArray[index] = currentPlayer;
        pos[index].innerHTML = currentPlayer;
        if(victoryStatus()){
            declare();
            return;
        }
        if(moveStatus()){
            declare2();
            return;
        }
        togglePlayer();
        selector();
    }
};

pos.forEach(function(box,index){
    box.addEventListener('click',()=>{
        onClick(index);
    })
});

/*function to initialise game*/

function initialise()
{
    currentPlayer = "X";
    stateArray = ["","","","","","","","","",];
    for(eachBox of pos){
        eachBox.innerHTML = "";
        eachBox.classList.remove('green');
        eachBox.setAttribute("style","pointer-events:all");
    }
    selector();
}

/*launch*/

initialise();