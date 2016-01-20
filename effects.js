(function () {

  var textBack = function () {
        $("#click-text-clear").text("Push to clear the view");
        $("#click-text-clear").removeAttr('disabled');
      },
      view = $('#viewDiv');

  $('.someDiv').on('click', function(e) {
    view.css('background-color', $(e.target).css('background-color'));
    view.fadeTo(2000, 1);
    // view.show(3000);
  });

  $("#click-text-clear").on("click", {user: "View cleared"}, function(e) {
    view.fadeTo(2000, 0);
    // view.hide(3000);
    $(this).text('Cleared!');
    $(this).attr('disabled', 'disabled');

    setTimeout(textBack, 2000);
    console.log(e.data.user);
  });

})();
