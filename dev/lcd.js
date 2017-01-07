
$(document).ready(function(){
//globals
teamName = 0;
  $('#pitchinput').click(function(){
    pinput = document.getElementById('pitchinput').value;

  pinput.toString();
    var finput = pinput.slice(0,1);
  console.log(finput);
  var linput = pinput.slice(1,2);
  console.log(linput);



if (finput === 0){
    $("*").removeClass('on');
 $('.a , .1,  .g, .4').addClass('on');

}
else if (finput == 1){  $("*").removeClass('on');
$('.4').addClass('on');


}
else if (finput == 2){  $("*").removeClass('on');
   $('.a , .d,  .g, #b-4, #c-4, #e-1, #f-1, #g-1').addClass('on');


}
else if (input == 3){  $("*").removeClass('on');
   $('.a , .d,  .g, #b-4, #c-4, #e-4, #f-4, #g-4').addClass('on');


}
else if (input == 4){  $("*").removeClass('on');
   $('.d, .4, #a-1, #b-1, #c-1').addClass('on');


}
else if (finput == 5){  $("*").removeClass('on');
   $('.a, .d, .g, #b-1, #c-1, #e-4, #f-4, #g-4').addClass('on');


}
else if (finput == 6){  $("*").removeClass('on');
   $('.a, .1, .d, .g, #e-4, #f-4, #g-4').addClass('on');


}

else if (finput == 7){  $("*").removeClass('on');
   $('.a, .4').addClass('on');


}

else if (finput == 8){  $("*").removeClass('on');
   $('.a, .d, .g, .1, .4').addClass('on');


}

else if (finput == 9){  $("*").removeClass('on');

  $('.a, .d, .4, #a-2, #a-3, #b-1, #c-1, #d-2, #d-3').addClass('on');



}
 else if(finput == 10) { $("*").removeClass('on');
 $('.a , .1,  .g, .4').addClass('on');
$('#postinput').val("0");
input = 0;
 };


});


    if (linput == 0){
    $("*").removeClass('son');
     $('.h , .one,  .n, .four').addClass('son');

    }
    else if (linput == 1){  $("*").removeClass('son');
    $('.four').addClass('son');


    }
    else if (linput == 2){  $("*").removeClass('son');
       $('.h , .k,  .n, #i-four, #j-four, #l-one, #m-one, #n-one').addClass('son');


    }
    else if (linput == 3){  $("*").removeClass('son');
       $('.h , .k,  .n, #i-four, #j-four, #l-four, #m-four, #n-four').addClass('son');


    }
    else if (linput == 4){  $("*").removeClass('son');
       $('.k, .four, #h-one, #i-one, #j-one').addClass('son');


    }
    else if (linput == 5){  $("*").removeClass('son');
       $('.h, .k, .n, #i-one, #j-one, #l-four, #m-four, #n-four').addClass('son');


    }
    else if (linput == 6){  $("*").removeClass('son');
       $('.h, .one, .k, .n, #l-four, #m-four, #n-four').addClass('son');


    }

    else if (linput == 7){  $("*").removeClass('son');
       $('.h, .four').addClass('son');


    }

    else if (linput == 8){  $("*").removeClass('son');
       $('.h, .k, .n, .one, .four').addClass('son');


    }

    else if (linput == 9){  $("*").removeClass('son');

      $('.h, .k, .four, #h-two, #h-three, #i-one, #j-one, #k-two, #k-three').addClass('son');
      finput = -1;

    }
     else {
       console.log('hi');
     }







//change visiting team name by clicking on cell
$('#visitor').click(function(){
  $('#visitor').css("background-color", "inherit");
  $('#visitor').css("border","1px solid gray")
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
