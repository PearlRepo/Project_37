var canvas, backgroundImage, bgimg;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload() {
  
  backgroundImage= loadImage("bg.jpg");
  bgimg= loadImage("ans.jpg")
}


function setup(){
  canvas = createCanvas(windowWidth-20,windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(0);
  background(backgroundImage);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();

  }
}
