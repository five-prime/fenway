$(document).ready(function(){
  $('#pitchinput').click(function(){
    pinput = document.getElementById('pitchinput').value;

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

fdSix();  }
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


fdNine();}
else{
  console.log("oops");

}


//begin second digit


//single digits must be entered manually

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


});
});
