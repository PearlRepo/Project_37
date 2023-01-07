class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name");
    this.input2 = createInput("").attribute("placeholder", "Enter correct option");
    this.button = createButton('SUBMIT');
    this.button2 = createButton('RESET');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/3+70, 10);

    this.question.html("What starts and ends with the letter ‘E’, but </br> has only one letter? " );

    this.question.position(270, 100);
    this.option1.html("A. Everyone " );
    this.option1.position(300, 200);
    this.option2.html("B. Envelope" );
    this.option2.position(850, 200);
    this.option3.html("C. Estimate " );
    this.option3.position(300, 280);
    this.option4.html("D. Example" );
    this.option4.position(850, 280);

    this.input1.position(400, 370);
    this.input2.position(700, 370);
    this.button.position(620, 430);
    this.button2.position(620, 490);

    this.title.class("bFont");
    this.question.class("mFont");
    this.option1.class("sFont");
    this.option2.class("sFont");
    this.option3.class("sFont");
    this.option4.class("sFont");
    this.input1.class("input");
    this.input2.class("input");
    this.button.class("btn");
    this.button2.class("btn");
    this.message.class("greeting")

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      var greeting = `Hey ${this.input1.value()}, your answer has been submitted. Waiting for your friend to answer...`;
      this.message.html(greeting);
      this.message.position(150, 550);

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.button2.mousePressed(()=>{
      contestant.updateCount(0)
      quiz.update(0)
      var ref = database.ref("contestants")
      ref.remove()
      location.reload();
    })
  }
}
