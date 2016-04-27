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
  for(var i = 0; i < works.length; ++i ) {
    $("#work").append("\
      <div class='col-xs-6 col-sm-4 col-md-3'>\
      <a href='#' class='work-img'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'><p class='proj-title'> "+ works[i].title + " </p> </span>\
        <a/>\
      </div>\
    ");
  };
  /* ends new work images */

  /* image title hover effect */
  $(".work-img").mouseenter(function(){
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
  /* end image title hover effect */

    // /* old work images */
  // for(var i=0; i<myWork.length; ++i) {
  //   $( "#" + i ).css("background-image", "url(" + myWork[i].pic + ")" );
  // };
  // /* end images */

  // /* old image title hover effect */
  // $(".work").mouseenter( function() {
  //   console.log(works[this.id].title);
  //   $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + works[this.id].title + "</p>" );
  // }).mouseleave( function() {
  //   $("p.info").html("");
  // });
  // /* end image title hover effect */

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