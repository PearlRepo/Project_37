class Quiz {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    question.hide(); 

    background(bgimg);
    fill(0);
    textSize(60);
    textAlign(CENTER);
    fill(rgb(255,255,255));
    textFont("Cambria, Cochin, Georgia, Times, 'Times New Roman', serif");
    text("Result",width/2, 80);

    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 350;
      fill(rgb(231, 232, 236));
      textSize(30);
      textFont("'Courier New', Courier, monospace")
      textAlign(CENTER)
      text("Contestant(s) who answered correctly are highlighted in green color",width/2,600);

      for(var plr in allContestants){
        debugger;
        var correctAns = "B";
        var correctAns2 = "b";
        textSize(25);

         if (correctAns !== allContestants[plr].answer || correctAns2 !== allContestants[plr].answer){
          textSize(25);
          stroke("red");
          strokeWeight(10);
          textFont("'Courier New', Courier, monospace;")
          fill("white");
         }

         if (correctAns === allContestants[plr].answer || correctAns2 === allContestants[plr].answer){
          textSize(30);
          stroke("green");
          strokeWeight(10);
          textFont("'Courier New', Courier, monospace;")
          fill("white");
         }


        display_Answers+=50;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, width/2 ,display_Answers)
      }
    }
  }
}
