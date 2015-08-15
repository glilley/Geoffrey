if (!Modernizr.svg) {
  $('img[src$=".svg"]').each(function() {
      //E.g replaces 'logo.svg' with 'logo.png'.
      $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
  });
}