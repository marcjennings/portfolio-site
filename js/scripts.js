/* Document ready starts here */
$(document).ready( function(){

  /* navbar menu collapse */
  $(document).on('click', ".collapse ul.navbar-nav li a", function(event) {       
    $(".navbar-collapse").collapse('hide');
    });
  /* end navbar menu collapse */
  
  /* text background color switched off */
  /* $(".main-text p").css("background-color", "#1cbbe6"); */ 
   /* end text background color switched off */
  
  /* submit button */
  $("#button-submit").on("click",function(){
    console.log("clicked");
    
    var comment = $("#message-box").val();
    console.log(comment);
    return false;
  });
  /* end submit button */
  
  /* character counter */
  $("#message-box").on("keyup", function(){
    console.log("key up event occurred on message box");

    var comment = $(this).val();
    var numOfChars = comment.length;

        var $character_counter = $("#character-counter");

    $character_counter.html(numOfChars);

    if (numOfChars > 50) {
      $character_counter.css("color", "red");
    }
    else {
      $character_counter.css("color", "white");
    }
  });
  /* end character counter */

  /* new work images */
  function addWork(_arr, idTarg) {
    for (var i = 0; i < _arr.length; ++i) {
      $("#" + idTarg).append("\
        <div class='col-xs-6 col-sm-4 col-md-3'>\
          <a href='" + _arr[i].href + "' class='work-img swipebox' title='" + _arr[i].title + "'>\
            <img class='img-responsive' src='" + _arr[i].pic + "'>\
            <span class='info'><p class='proj-title'> " + _arr[i].title + " </p> </span>\
          <a/>\
        </div>\
      ");
    }
  }
  addWork(infogs, 'infogs');
  addWork(e_learn, 'e_learn');
  addWork(illus, 'illus');
  addWork(webdev,'webdev');
  /* end new work images */
  

/* image title hover effect */
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
  /* end image title hover effect */


  /* table */
  var rows = $(".my-row");
  
  for(var i=0; i<rows.length; ++i) {
    
    if (i%2===0) {
    
    $(rows[i]).css("background-color", "black");
    };
  }; 
  /* end table */

  // work section
  console.log(works);

}); /* end Document ready */