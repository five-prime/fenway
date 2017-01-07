//global variable

var teamName = -1;

$(document).ready(function(){

  $('#pitchinput').click(function(){

    //get input

    pinput = document.getElementById('pitchinput').value;

    //First Digit display

    //00 - 09

    if (pinput >= 0 && pinput <= 9){

      fdZero();

    }

    // 10 -19

    else if (pinput >= 10 && pinput <= 19){

      fdOne();

    }

    // 20 - 29

    else if (pinput >= 20 && pinput <= 29){

      fdTwo();

    }

    // 30 - 39

    else if(pinput >= 30 && pinput <= 39){

      fdThree();

    }

    // 40 - 49

    else if(pinput >= 40 && pinput <=49){

      fdFour();

    }

    // 50 - 59

    else if(pinput >= 50 && pinput <= 59){

      fdFive();

    }

    // 60 - 69

    else if(pinput >= 60 && pinput <= 69){

      fdSix();
    }

    // 70 - 79

    else if(pinput >= 70 && pinput <= 79){

      fdSeven();

    }

    // 80 - 89

    else if(pinput >= 80 && pinput <= 89){

      fdEight();
    }

    // 90 - 99

    else if(pinput >=90 && pinput <= 99){

      fdNine();
    }

    else{

      console.log("error");

    }


    //begin second digit
    //Single digits must be entered manually

    if(pinput ==="0"){

      sdZero();
    }

    else if(pinput === "1"){

      sdOne();
    }

    else if(pinput === "2"){

      sdTwo();

    }

    else if(pinput === "3"){

      sdThree();

    }

    else if(pinput === "4"){

      sdFour();

    }

    else if(pinput === "5"){

      sdFive();

    }

    else if(pinput === "6"){

      sdSix();

    }

    else if(pinput === "7"){

      sdSeven();

    }

    else if(pinput === "8"){

      sdEight();

    }

    else if(pinput === "9"){

      sdNine();

    }

    //begin slice and analyze second digit

    pinputSecond = pinput.slice(1,2);

    if(pinputSecond === '0'){

      sdZero();

    }

    else if(pinputSecond === '1'){

      sdOne();

    }

    else if(pinputSecond === '2'){

      sdTwo();

    }

    else if(pinputSecond === '3'){

      sdThree();

    }

    else if(pinputSecond === '4'){

      sdFour();

    }

    else if(pinputSecond === '5'){

      sdFive();

    }

    else if(pinputSecond === '6'){

      sdSix();

    }

    else if(pinputSecond === '7'){

      sdSeven();

    }

    else if(pinputSecond === '8'){

      sdEight();

    }

    else if(pinputSecond === '9'){

      sdNine();

    }
//end click function
  });

//change visiting team name by clicking on cell

$('#visitor').click(function(){

  $('#visitor').css("background-color", "inherit");

  $('#visitor').css("border","1px solid gray");

  //list of teams stored as variable

  var teams =["BAL","TOR","NYY","TB ","CLE","DET","KC ","CWS","MIN","TEX","SEA","HOU","LAA","OAK","WAS","NYM","MIA","PHI","ATL","CHC","STL","PIT","MIL","CIN","LAD","SF ","COL","ARI","SD "];

  //30 teams, first index position is 0 so teams = 29

  //alphabetize

  teams.sort();

  if (teamName < 29){

    teamName += 1;

    $(this).html(teams[teamName]);
                      }
  else if (teamName >= 29){

    teamName = -1;

  }

    });
//end doc ready function
});
