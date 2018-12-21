var content = document.getElementById('content');

var rockPaperScissors = ["rock","paper","scissors"];
var state = {

    player: '',
    computer: rockPaperScissors[Math.floor(Math.random()*3)],
    playerChoice:true,
    isGameOver:false,
    gameStatus:'',
}

console.log(state.computer);


function setPlayer(weapon){
   
    state.player=weapon;
     play(weapon);
    
}




function play(type){
   console.log(type);
    
    
   
   
    computer= type.computer;
    console.log(state.computer);
    if (type=="rock"){
        if(state.computer=="rock"){
             state.gameStatus= "You tied!";
        }else if(state.computer=="paper") {
            state.gameStatus= "You lost!";
        }else if(state.computer =="scissors"){
            state.gameStatus= "You won!";
        }
    } else if (type=="paper"){
        if(state.computer=="rock"){
            state.gameStatus= "You won!";
        }else if(computer=="paper"){
            state.gameStatus= "You tied!";
        }else if(state.computer=="scissors"){
            state.gameStatus= "You lost!";
        }
    } else if (type=="scissors"){
        if(state.computer=="rock"){
            state.gameStatus= "You lost!";
        }else if(state.computer=="paper"){
            state.gameStatus= "You won!";
        }else if(state.computer=="scissors"){
            state.gameStatus= "You tied!";
        }
    }
  
    content.innerHTML = renderGame(state);

   
}

function renderGame(game) {
    // Change this render function to use the "game" parameter
  
    
  
    
    var gameHTML=
    
        `<div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button onclick="setPlayer('rock')" class="btn btn-primary">Rock</button>
                <button onclick="setPlayer('paper')" class="btn btn-primary">Paper</button>
                <button onclick="setPlayer('scissors')" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
            <div class="m-5">You played: <b>${game.player}</b></div>
            <div class="m-5">The computer played: <b>${game.computer}</b></div>
        </div>
        <h1 class="text-center">${game.gameStatus}</h1>
    </div>`

    return gameHTML;
}
content.innerHTML = renderGame(state);
