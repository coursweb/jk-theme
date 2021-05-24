(function (a) {
  a.fn.replaceTagName = function (f) {
      var g = [],
          h = this.length;
      while (h--) {
          var k = document.createElement(f),
              b = this[h],
              d = b.attributes;
          for (var c = d.length - 1; c >= 0; c--) {
              var j = d[c];
              k.setAttribute(j.name, j.value)
          }
          k.innerHTML = b.innerHTML;
          a(b).after(k).remove();
          g[h - 1] = k
      }
      return a(g)
  }
})(window.jQuery);

$(document).ready(function () {

  $("#slideshow").click(function (e) {

    e.preventDefault();


    /*  remove all original stylesheets: */

    $('link[rel=stylesheet]').remove();

    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.0/reveal.min.css"
    }).appendTo("head");

    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.0/theme/solarized.min.css"
    }).appendTo("head");

    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.0/plugin/highlight/zenburn.min.css"
    }).appendTo("head");

    /* methode: https://stackoverflow.com/questions/11803215/  */

    /* Manipulate content */

    /* Move title into slides */

    var SlideshowTitle = $("h1.post-title").clone();
    SlideshowTitle.prependTo("#post-content");

    /* remove content */

    $(".site-header").remove();
    $(".secondary-menu").remove();
    $(".site-footer").remove();
    $(".post-header").remove();
    $("#post-footer").remove();
    $("#post-content > hr").remove();

    /* create sections */

    $("#post-content > div, #post-content > p, #post-content > blockquote, #post-content > h1, #post-content > h2, #post-content > h3, #post-content > h4, #post-content > iframe, #post-content > table").wrap("<section></section>");

    /* 

    Lists items : need to be transformed into nested slides.

    Also possible, but may place too much content on screen:

    $( "#post-content li:not(:first-child)" ).addClass( "fragment" );     

    */

    $("#post-content > ul > li, #post-content > ol > li").replaceTagName("section");

    $("#post-content > ul, #post-content > ol").replaceTagName("section");

    $.when(
      // $.getScript("/reveal.js/lib/js/head.min.js"),
      $.getScript("https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.1.0/reveal.min.js"),
      $.Deferred(function (deferred) {
        $(deferred.resolve);
      })
    ).done(function () {

      /* when the scripts are all loaded: */

      Reveal.initialize({

        width: "90%",
        height: "100%",
        margin: 0.2,
        minScale: 0.5,
        maxScale: 1,
        backgroundTransition: 'zoom'
      });

      $(".reveal.center").css({
        "height": "95hv"
      });

    });

  });


});