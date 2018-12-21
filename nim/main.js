var content = document.getElementById('content');

var nim = {

    player:'player 1',
    
    numPebbles:16,
    gameStatus:false
    
}

content.innerHTML = renderGame(nim);

function renderPebblesLeft(num) {
    var orangePebble = `<div class="pebble"></div>`;
    var greyPebble = `<div class="pebblegrey"></div>`;
    var pebbles = [];
    for(var i = 0; i < num; i++) {
        pebbles.push(orangePebble);
    }
    for(var i= 0;i<16-num;i++){
        pebbles.push(greyPebble)
    }
    return pebbles.join("");
    
}
function renderTakenPebbles(pebbles){
    console.log(pebbles)
    nim.numPebbles -= pebbles;

    console.log(nim.numPebbles);
   
   
    
      if(nim.numPebbles<=0){
          nim.gameStatus=true;
      }
 
         if (nim.pebbles <=0){
            nim.gameStatus = true;
        } else if (nim.player=="player 1"){
            nim.player="player 2";
        }else if (nim.player=="player 2"){
            nim.player="player 1";
        } 
        
        
        
        
        content.innerHTML = renderGame(nim);
    }
 

function renderGame(game) {
    // Change this render function to use the "game" parameter
    if (nim.gameStatus){
        return `<h1> ${nim.player} has Won! Refresh the page to play again!</h1>`
    }
else{ return`
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are ${nim.pebbles} pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                ${renderPebblesLeft(nim.numPebbles)}
                
            </div>
            <h4 class="mt-5">It's ${nim.player}'s turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onclick="renderTakenPebbles(takeInput.value)" class="btn btn-primary">Take</button>
            </div>
        </div>
    `}
}