(function() {

  $(function() {

    //Window events
    // $(window).on("resize scroll", {user: "Some string"}, function(e) {
    //   $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
    //   $("#scroll-text").text("Position Y: " + window.scrollY);
    //   console.log(e.data.user);
    // });

    $(window).on({
      resize:function(e) {
        $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
      },
      scroll:function(e){
        $("#scroll-text").text("Position Y: " + window.scrollY);
      }
    }, {user: "Test string"});
    // $(window).trigger('resize');

    //Mouse events
    $("#click-text").one("click", {user: "Window size displayed"}, function(e) {
      $("#resize-text").text("Width: " + window.innerWidth + ", Height: " + window.innerHeight);
      $(this).text("Pushed");
      $(this).attr('disabled', 'disabled');
      console.log(e.data.user);
    });
  });

})();
