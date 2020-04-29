/* 
game rules:
-the game has 2 players, players,playing in rounds
-in each turn,a player rolls a dice as many times as he whishes.each result get
added to his round score
-BUT, if the plater rolls a 1 all his round score gets lost.
After that, it's the next player turn.
-the player can choose to 'HOLD', which means that his ROUND score gets
added to his GLOBAL score. After that ,it's the next player's turn
-the first player to get 100 points on GLOBAL score wins the game
*/

var scores,roundscore,activeplayer,gameplaying;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){

    //1.Random number
    var dice=Math.floor(Math.random()*6)+1;
  //2.display the result
var diceDOM=document.querySelector('.dice')
diceDOM.style.display='block';
diceDOM.src='images/d-'+dice+'.png';

//3.update the round score IF the rolled number is not 1
if(dice!=1){
    //add score
    roundscore += dice ;
    document.querySelector('#current-'+activeplayer).
    textContent=roundscore;
}else{
    //next player
    nextplayer();
}
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplaying){
    // add current score to the global score0
    scores[activeplayer] += roundscore;
    //scores[activeplayer]=scores[activeplayer] + roundscore;

    //update the ui
    document.querySelector('#score-'+ activeplayer).textContent=scores[activeplayer];
   
    // check if player won the game
    if(scores[activeplayer]>=100){
        document.querySelector('#name-'+activeplayer).textContent='winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-' +activeplayer + '-panel').classList.add('winner!');
        document.querySelector('.player-' +activeplayer + '-panel').classList.remove('active');  
        gameplaying=false;
    }else{
    //nextplayer
    nextplayer();
    }
}
});


function nextplayer(){
    activeplayer === 0 ? activeplayer = 1 : activeplayer= 0;
    roundscore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
     
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores=[0,0];
    roundscore =0;
    activeplayer=0;
    gameplaying=true;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='player 1';
    document.getElementById('name-1').textContent='player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
   
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}















//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector('#current-'+activeplayer).textContent=dice;
//document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);
