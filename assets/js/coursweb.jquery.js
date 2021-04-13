$(document).ready(function() {

  /*  wrap images inside an A link... */

  $(".post-content > p > img").each(function() {
    var $this = $(this);
    var css = $this.attr('class');
    if (css != 'large-image') {
        var src = $this.attr('src');
        var alt = $this.attr('alt');
        $this.addClass('image');
        var a = $('<a/>').attr('href', src).attr('title', alt).addClass('image-link');
        $this.wrap(a);
    } 
  });

  /* Trigger Popup */

  $('.image-link').magnificPopup({    
    type:'image',
    closeOnContentClick: true,
    verticalFit: true
  });

  /* Show Edit Icons when scrolling */

if (document.documentElement.clientWidth > 600) {

  var SourceLink = $('.source');

  $(window).scroll(function () {
      var $this = $(this);
      if($this.scrollTop() > 200) {
          SourceLink.fadeIn();
      }
      else {
          SourceLink.fadeOut();
      }
  });

}


// Amélioration des menus
// **********************
// Traduire les conditions CSS: @media screen and (max-width: 799px), screen and (max-height: 599px)

if (document.documentElement.clientWidth > 800 && document.documentElement.clientHeight > 600) {

  // Menu Desktop
  console.log("Menu Desktop");
  // Faut-il rendre le menu fixe?
  // Vérifier hauteur du menu: est-il plus haut que l'écran?


}
  

}); // document ready

