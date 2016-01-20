(function() {

  $('<img>', {
    src: 'totem01.gif',
    alt: 'Totem',
    title: 'Totem. Or only a dream of a totem?',
    click: function(e) {
      $(this).toggleClass("selectedImg");
    }
    // on: {
    //   click: function(e) {
    //     $(this).toggleClass(" selectedImg");
    //   }
    // }
  })
  .css({
    'position': 'fixed',
    'top': '25px',
    'left': '50%',
    'margin-left': '-100px'
  })
  .appendTo('body');

})();
