$(document).ready(function() {
  $("form#quiz").submit(function(event) {
debugger
    var age = $("select#age").val();
    var yourGender = $("select#yourGender").val();
    var celebGender = $("select#celebGender").val();
    var height = $("select#height").val();

      if (yourGender === 'male' && celebGender === 'female' && age === 'young' && height === 'short') {
        $("#yourCeleb").after('Scarlett Johanssen' + '<br><img src="img/scarlett.jpg">');
        $("#quiz").hide();
      } else if (yourGender === 'male' && celebGender === 'female' && age === 'middle' && height === 'medium') {
        $("#yourCeleb").after('Luicy Liu' + '<br><img src="img/lucy.jpg">');
        $("#quiz").hide();
      } else if (yourGender === 'male' && celebGender === 'male') {
        $("#yourCeleb").after('Matt Bomer' + '<br><img src="img/matt.jpg">');
        $("#quiz").hide();
      } else if (yourGender === 'female' && celebGender === 'male') {
        $("#yourCeleb").after('Tom Hardy' + '<br><img src="img/tom.jpg">');
        $("#quiz").hide();
      } else if (yourGender === 'female' && celebGender === 'male' && age === 'middle') {
        $("#yourCeleb").after('Chris Pratt' + '<br><img src="img/chris.jpeg">');
        $("#quiz").hide();
      } else {
        $("#yourCeleb").after('Ellen DeGeneres' + '<br><img src="img/ellen.png">');
        $("#quiz").hide();
      }
      event.preventDefault();

    });
  });
