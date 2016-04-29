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
          <a href='#' class='work-img'>\
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
  
  // for(var i=0; i < infogs.length; ++i ) {
  //   $("#infogs").append("\
  //     <div class='col-xs-6 col-sm-4 col-md-3'>\
  //     <a href='#' class='work-img'>\
  //       <img class='img-responsive' src='" + infogs[i].pic + "'>\
  //       <span class='info'><p class='proj-title'> "+ infogs[i].title + " </p> </span>\
  //       <a/>\
  //     </div>\
  //   ");
  // };

  // for(var i=0; i < e_learn.length; ++i ) {
  //   $("#e-learn").append("\
  //     <div class='col-xs-6 col-sm-4 col-md-3'>\
  //     <a href='#' class='work-img'>\
  //       <img class='img-responsive' src='" + e_learn[i].pic + "'>\
  //       <span class='info'><p class='proj-title'> "+ e_learn[i].title + " </p> </span>\
  //       <a/>\
  //     </div>\
  //   ");
  // };

  //   for(var i=0; i < illus.length; ++i ) {
  //   $("#illus").append("\
  //     <div class='col-xs-6 col-sm-4 col-md-3'>\
  //     <a href='#' class='work-img'>\
  //       <img class='img-responsive' src='" + illus[i].pic + "'>\
  //       <span class='info'><p class='proj-title'> "+ illus[i].title + " </p> </span>\
  //       <a/>\
  //     </div>\
  //   ");
  // };

  // for(var i=0; i < webdev.length; ++i ) {
  //   $("#webdev").append("\
  //     <div class='col-xs-6 col-sm-4 col-md-3'>\
  //     <a href='#' class='work-img'>\
  //       <img class='img-responsive' src='" + webdev[i].pic + "'>\
  //       <span class='info'><p class='proj-title'> "+ webdev[i].title + " </p> </span>\
  //       <a/>\
  //     </div>\
  //   ");
  // };
  /* ends new work images */
  /* ----------------------------------------------------------------------------------------------- */
  /* multi array, prints/appends to each row/#id */
    // for (var i = 0; i < multiArr.length; ++i) {
    //   for (var p = 0; p < multiArr[i].length; ++p) {
    //     $("#infogs, #e-learn, #illus, #webdev").append("\
    //       <div class='col-xs-6 col-sm-4 col-md-3'>\
    //         <a href='#' class='work-img'>\
    //           <img class='img-responsive' src='" + multiArr[i][p].pic + "'>\
    //           <span class='info'><p class='proj-title'> " + multiArr[i][p].title + " </p> </span>\
    //         <a/>\
    //       </div>\
    //     ");
    //   };
    // }
  /* ends multi array, prints/appends to each row/#id */
    /* ----------------------------------------------------------------------------------------------- */

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

  /* map */
  function initialize(){
    var mapOptions = {
      center: new google.maps.LatLng(52.4776239, -1.8988442),
      zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'I live near here - Click to zoom'
    });

    google.maps.event.addListener(marker, 'click', function(){
      map.setZoom(18);
      map.setCenter(marker.getPostion());
    });

  };
  
  google.maps.event.addDomListener(window, 'load', initialize);
  /* end map */

  // work section
  console.log(works);

}); /* end Document ready */