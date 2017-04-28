$(document).ready(function() {
  $("form#coursetracker").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var color = $("#color").val();
    var environment = $("#environment").val();
    var type = $("#type").val();
    var language = $("#language").val();
    var computers = $("#computers").val();

    if (computers === 'no') {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').hide();
    $('#no').fadeIn();
  } else if (type === 'front') {
    $('#css').fadeIn();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').hide();
    $('#no').hide();
  } else if ((environment === 'big') && (type === 'app')) {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').fadeIn();
    $('#no').hide();
    $('#csharp').hide();
  } else if ((environment === 'big') && (type === 'back')) {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').hide();
    $('#no').hide();
    $('#java').hide();
    $('#csharp').fadeIn();
  } else if ((environment === 'small') && (type === 'app')) {
    $('#no').hide();
    $('#css').hide();
    $('#ruby').fadeIn();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').hide();
  } else if ((environment === 'small' ) && (type === 'back')) {
    $('#no').hide();
    $('#css').hide();
    $('#ruby').hide();
    $('#php').fadeIn();
    $('#java').hide();
    $('#csharp').hide();
    }

    if ( color === 'teal')
    $("body").removeClass().addClass("teal-background");
    else if (color === 'pink')
    $("body").removeClass().addClass("pink-background");
    else if (color === 'orange')
    $("body").removeClass().addClass("orange-background");
    else if (color === 'purple')
    $("body").removeClass().addClass("purple-background");

    $('.name').text(name);

  })
});
