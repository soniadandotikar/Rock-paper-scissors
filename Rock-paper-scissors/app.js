const buttons = document.querySelectorAll('.pick');
const choices =[ 'rock', 'paper', 'scissors'];
const scoreElement = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const picked = document.getElementById('picked');
const text = document.getElementById('text');
const mousePicked = document.getElementById('mouse-picked');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const win = document.getElementById('win');


const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');



let userChoice = undefined
let score = 0;

buttons.forEach(button => {
    button.addEventListener('click' , () => {
    userChoice = button.getAttribute('data-choice');
       
       pickWinner();
       
    });
    
});


reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click' , () =>{
    modal.style.display ='flex';
});

closeBtn.addEventListener('click' , () =>{
    modal.style.display ='none';
});


function pickWinner() {


    const computerChoice = RandomChoice();

    
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice);
 

    if(userChoice === computerChoice)
    {
        win.innerText = 'DRAW';
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' ||  userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper')
    {
        win.innerText = 'YOU WON';
        updateScore(1);
    }
    else
    {
        win.innerText = 'YOU LOST';
        updateScore(-1);
        
    }
    // show the selection | hide the main
    main.style.display = 'none';
    selection.style.display = 'flex';
    

}


 


function updateScore(value) {
    score += value;
    scoreElement.innerText = score;
}      

function RandomChoice() {

    return choices[Math.floor(Math.random() * 3)];

}

function updateSelection(selectionElement, choice) 
{   // class reset
    selectionElement.classList.remove('btn-paper');
    selectionElement.classList.remove('btn-scissors');
    selectionElement.classList.remove('btn-rock');

    //update img
    const img = selectionElement.querySelector('img');
    selectionElement.classList.add(`btn-${choice}`);
    img.src = `Images/icon-${choice}.svg`;
    img.alt = choice; 
}