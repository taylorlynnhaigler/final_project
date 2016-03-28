$(document).ready(function(){

// Nav Button
     function toggleNav() {
          $('nav ul').slideToggle();
        }

        $('#menu-button').click(toggleNav);

        function windowResized() {
          var width = $(window).width();
          var menu = $('nav ul');

          if (width > 768 && menu.is(':hidden')) {
              menu.removeAttr('style');
          }
        }

// MAIN PAGE IMAGES
$("#carousel img").eq(0).show();

  // Set up our index variable
var currentImageNumber = 0;

$("#next").click(function(){
  

      // Hide the current image
      $("#carousel img").eq(currentImageNumber).hide();
  

      // Increment/reset currentImageNumber
      
      currentImageNumber = (currentImageNumber + 1) % $("#carousel img").length;

      // Show the next image
      $("#carousel img").eq(currentImageNumber).show();

  });

$("#back").click(function(){

     // Hide the current image
      $("#carousel img").eq(currentImageNumber).hide();
  

      // Increment/reset currentImageNumber
      
      currentImageNumber = (currentImageNumber - 1) % $("#carousel img").length;

      // Show the next image
      $("#carousel img").eq(currentImageNumber).show();

  });
});


// JL EVENTS PAGE

$("#slider img").eq(0).show();

  // Set up our index variable
var currentImageNumber = 0;

$("#next").click(function(){
  

      // Hide the current image
      $("#slider img").eq(currentImageNumber).hide();
  

      // Increment/reset currentImageNumber
      
      currentImageNumber = (currentImageNumber + 1) % $("#slider img").length;

      // Show the next image
      $("#slider img").eq(currentImageNumber).show();

  });

$("#back").click(function(){

     // Hide the current image
      $("#slider img").eq(currentImageNumber).hide();
  

      // Increment/reset currentImageNumber
      
      currentImageNumber = (currentImageNumber - 1) % $("#slider img").length;

      // Show the next image
      $("#slider img").eq(currentImageNumber).show();

  });
});




// Show the first image
// $("#slider img").eq(0).show();

  // Set up our index variable
 // var currentImageNumber = 0;

 // setInterval(function(){

