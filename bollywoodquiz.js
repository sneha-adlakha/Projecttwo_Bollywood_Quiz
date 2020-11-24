const chalk = require('chalk');
var readlineSync=require('readline-sync');
const styleOne = chalk.bold.red;
const styleTwo = chalk.keyword('orange');
console.log(styleOne("Welcome to Quiz..."));
console.log(styleTwo("This is Quiz About Bollywood."));
console.log(styleOne("I will ask few Questions about Bollywood...."));
var userName = readlineSync.question(styleOne("Please enter your name? "));
console.log(chalk.white.underline.bold("Welcome to the Quiz,"+userName.toUpperCase()+"\nType a for Option A\nType b for Option B\nType c for Option C\nType d for Answer D\n"));

var hiscore =
[
  {
    name:"Sneha",
    score:4
  },
  {
    name:"Ambika",
    score:4
  }
]
var questionOne =
{
  question:"The year in which Amitabh Bachchan starrer 'Sharaabi' released?\n a 1985\n b 1984\n c 1987\n d 1980\n",
  answer:"a"
}
var questionTwo =
{
  question:"Which was the first film in which Amitabh and Jaya Bachchan worked together?\n a Guddi\n b Milli\n c EkNazar\n d Abhiman\n",
  answer:"a"
}
var questionThree =
{
  question:"First Indian film with sound?\n a AlamAra\n b KisanKanya\n c KeechakaVadam\n d Kalidas\n",
  answer:"a"
}
var questionFour =
{
  question:"Who was the first Indian to win an Oscar? \n a Satyajeet Ray  \n b Bhanu Athaiya   \n c Bimal Roy  \n d A. R Rehman\n",
  answer:"b"
}
var questionFive =
{
  question:"This is the only film in Bollywood where Aamir Khan & Shah Rukh Khan shared a frame. Name the film.\n a Trimurti  \n b Darr  \n c Ashiq Awara  \n d Pehla Nasha\n",
  answer:"d"
}
var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive];
var score=0;
var counter=0;
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log("Answer is Right");
    score=score+1;
    console.log("Current Score "+score);
  }
  else
  {
    console.log("Wrong Answer");
    score=score-1;
    console.log("Current Score "+score);
  }
}
for(var j=0;j<hiscore.length;j++)
{
  if(hiscore[j].score<score)
  {
    counter=counter+1;
  }
}
console.log(styleOne('Final score is '+score));
if(counter>0)
{
  console.log("you beaten high score");
}
console.log(styleTwo('-------'));