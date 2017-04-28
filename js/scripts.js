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
    $('#no').show();
  } else if (type === 'front') {
    $('#css').show();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').hide();
  } else if ((environment === 'big') && (type === 'app')) {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').show();
    $('#csharp').hide();
  } else if ((environment === 'big') && (type === 'back')) {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').show();
  } else if ((environment === 'small') && (type === 'app')) {
    $('#css').hide();
    $('#ruby').show();
    $('#php').hide();
    $('#java').hide();
    $('#csharp').hide();
  } else if ((environment === 'small' ) && (type === 'back')) {
    $('#css').hide();
    $('#ruby').hide();
    $('#php').show();
    $('#java').hide();
    $('#csharp').hide();
    }

    $('.name').text(name);

  })
});
