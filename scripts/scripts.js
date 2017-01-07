



$(document).ready(function(){
  $('#pitchinput').click(function(){

    //PInput = Pitcher # Input

    pinput = document.getElementById('pitchinput').value;

    //first lcd display number

    //0-9, displays 0



clearFirst();
fdZero();


//10 - 19, displays 1
    if (pinput >= 10 && pinput <= 19){

      clearFirst();
fdOne();
    }

//20 - 29, displays 2
  else if (pinput >= 20 && pinput <= 29){

    clearFirst();
fdTwo();
  }
//30 - 39, displays 3
  else if(pinput >= 30 && pinput <= 39){

    clearFirst();
fdThree();
  }

//40 - 49, displays 4
  else if(pinput >= 40 && pinput <=49){

    clearFirst();
fdFour();
  }

//50 - 59, displays 5
  else if(pinput >= 50 && pinput <= 59){

    clearFirst();
fdFive();

  }
//60 - 69, displays 6
  else if(pinput >= 60 && pinput <= 69){

    clearFirst();
fdSix();  }

//70 -79, displays 7
else if(pinput >= 70 && pinput <= 79){

  clearFirst();
fdSeven();

}
//80 - 89, displays 8
else if(pinput >= 80 && pinput <= 89){

  clearFirst();
fdEight();
}
// 90 - 99, displays 9
else if(pinput >=90 && pinput <= 99){

  clearFirst();

fdNine();}
else{
  console.log("oops");

}
//Second digit begin
//1-9 cannot be sliced? Cannot force two digit input in HTML must do manually
if(pinput ==="0"){     clearSecond();
 $('.h , .one,  .n, .four').addClass('on');}
else if(pinput === "1"){  clearSecond();
  $('.four').addClass('on');}
else if(pinput === "2"){

      $('.h , .k,  .n, #i-four, #j-four, #l-one, #m-one, #h-one').addClass('on');
}
else if(pinput === "3"){ clearSecond();    $('.h , .k,  .n, #i-four, #j-four, #l-four, #m-four, #n-four').addClass('on');
}
else if(pinput === "4"){ clearSecond();     $('.k, .four, #h-one, #i-one, #j-one').addClass('on');
}
else if(pinput === "5"){ clearSecond();
}
else if(pinput === "6"){clearSecond();
}
else if(pinput === "7"){clearSecond();
}
else if(pinput === "8"){clearSecond();
}
else if(pinput === "9"){clearSecond();
}



//slice pitcher input into 2nd digit, then compare
pinputSecond = pinput.slice(1,2);
   console.log(pinputSecond);
//second digit display zero
   if(pinputSecond === '0'){

     $(".h, .i, .j, .k, .l, .m, .n").removeClass('on');

       $('.h , .one,  .n, .four').addClass('on');
   }

else if(pinputSecond === '1'){
  console.log("oneeee");

  $(".h, .i, .j, .k, .l, .m, .n").removeClass('on');
  $('.four').addClass('on');


}

// else if(pinputSecond === 2){}
// else if(pinputSecond === 3){}
// else if(pinputSecond === 4){}
// else if(pinputSecond === 5){}
// else if(pinputSecond === 6){}
// else if(pinputSecond === 7){}
// else if(pinputSecond === 8){}
// else if(pinputSecond === 9){}
else{
  console.log('oops X 2');

}
});
});
