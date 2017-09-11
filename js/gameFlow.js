var step = [starter, play, over];

var flow = {
 status : step,
 play : function(num){
     step[num]();
 }
}

var starter = function (){
  drawStarter();
}

var descript = function (){
  drawDescript();
}

var play = function (){
 if (newGame == true){
   init();
   newGame = !newGame;
 }
 update();
 drawPlay();
}

var over = function(){
 getScore();
 drawOver();

}

var getScore = function(){
 if (localStorage.getItem("deepInside.score")){
   historyScore = localStorage.getItem("deepInside.score");
   if (historyScore < score) {
     historyScore = score;
     localStorage.setItem("deepInside.score", historyScore);
   }
 }else{
   historyScore = score;
   localStorage.setItem("deepInside.score", historyScore);
 }
}
