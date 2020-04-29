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

//challenges


var scores,roundscore,activeplayer,gameplaying;
init();

var lastdice;
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){

    //1.Random number
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
  //2.display the result
document.getElementById('dice-1').style.display='block';
document.getElementById('dice-2').style.display='block';
document.getElementById('dice-1').src='images/d-'+dice1+'.png';
document.getElementById('dice-2').src='images/d-'+dice2+'.png';

//3.update the round score IF the rolled number is not 1

if(dice1 !==1 && dice2 !==1){
    //add score
    roundscore += dice1 + dice2 ;
    document.querySelector('#current-'+activeplayer).
    textContent=roundscore;
}else{
    //next player
    nextplayer();
}



/*
if(dice === 6 && lastdice === 6){
   //player looses score
   scores[activeplayer] =0;
   document.querySelector('#score-' + activeplayer).textContent='0';
   nextplayer();
}else if(dice!==1){
    //add score
    roundscore += dice ;
    document.querySelector('#current-'+activeplayer).
    textContent=roundscore;
}else{
    //next player
    nextplayer();
}
lastdice=dice;
*/
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gameplaying){
    // add current score to the global score0
    scores[activeplayer] += roundscore;
    //scores[activeplayer]=scores[activeplayer] + roundscore;

    //update the ui
    document.querySelector('#score-'+ activeplayer).textContent=scores[activeplayer];
    
    var input= document.querySelector('.final-score').value;
    var winningscore;
     
    //undefined,0,null or"" are coerced to false
     //Anything else is coerced to true
     if(input){
         winningscore = input;
     }else{
         winningscore=100;
     }
// check if player won the game
    if(scores[activeplayer]>=winningscore){
        document.querySelector('#name-'+activeplayer).textContent='winner!';
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
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
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);


function init(){
    scores=[0,0];
    roundscore =0;
    activeplayer=0;
    gameplaying=true;

    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';

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

