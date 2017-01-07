//clear first digit
function clearFirst(){

  $('.a, .b, .c, .d, .e, .f, .g').removeClass('on');
}

//clear second digit
function clearSecond(){
  $('.h, .i, .j, .k, .l, .m, .n').removeClass('on');


}


// first digit display zero

function fdZero(){

  $('.a , .1,  .g, .4').addClass('on');


}

//first digit display one

function fdOne(){

  clearFirst();

  $('.4').addClass('on');

}

//first digit display two

function fdTwo(){
  clearFirst();

  $('.a , .d,  .g, #b-4, #c-4, #e-1, #f-1, #g-1').addClass('on');

}

//first digit display three

function fdThree(){
  clearFirst();

  $('.a , .d,  .g, #b-4, #c-4, #e-4, #f-4, #g-4').addClass('on');


}

//first digit display four

function fdFour(){
  clearFirst();

  $('.d, .4, #a-1, #b-1, #c-1').addClass('on');


}

//first digit display five

function fdFive(){
  clearFirst();

  $('.a, .d, .g, #b-1, #c-1, #e-4, #f-4, #g-4').addClass('on');

}

function fdSix(){
  clearFirst();

  $('.a, .1, .d, .g, #e-4, #f-4, #g-4').addClass('on');

}

function fdSeven(){
  clearFirst();

  $('.a, .4').addClass('on');

}

function fdEight(){
  clearFirst();

  $('.a, .d, .g, .1, .4').addClass('on');


}

function fdNine(){
  clearFirst();

  $('.a, .d, .4, #a-2, #a-3, #b-1, #c-1, #d-2, #d-3').addClass('on');

}


//second digit
function sdZero(){clearSecond();
  $('.h , .one,  .n, .four').addClass('on');}

function sdOne(){clearSecond();
  $('.four').addClass('on');}



function sdTwo(){clearSecond();
  $('.h , .k,  .n, #i-four, #j-four, #l-one, #m-one, #h-one').addClass('on');

}
function sdThree(){clearSecond();
$('.h , .k,  .n, #i-four, #j-four, #l-four, #m-four, #n-four').addClass('on');
}
function sdFour(){clearSecond();
  $('.k, .four, #h-one, #i-one, #j-one').addClass('on');
 }

function sdFive(){clearSecond();
  $('.h, .k, .n, #i-one, #j-one, #l-four, #m-four, #n-four').addClass('on');
}

function sdSix(){clearSecond();
  $('.h, .one, .k, .n, #l-four, #m-four, #n-four').addClass('on');

}
function sdSeven(){clearSecond();
  $('.h, .four').addClass('on');

}
function sdEight(){clearSecond();
  $('.h, .k, .n, .one, .four').addClass('on');

}
function sdNine(){clearSecond();
  $('.h, .k, .four, #h-two, #h-three, #i-one, #j-one, #k-two, #k-three').addClass('on');

}
