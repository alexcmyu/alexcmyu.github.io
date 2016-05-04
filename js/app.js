var titles = [ 'front-end wizard', 'ad tech ninja', 'kung-fu master', 'hardcore gamer', 'dog lover', 'hard-ish worker', 'freestyle dancer', 'Chandler Bing', 'Golden State Warrior', 'Triton', 'cool cat' ]
var currentTitle = 0

$(document).ready(function() {
event.preventDefault()

// For array to randomly select
//   var pickRandomNumber = function(prev) {
//       num = Math.floor(Math.random() * titles.length);
//       if (num === prev) {
//       	pickRandomNumber(num);
//       } else {
//       	return num;
//       }
//   }
//
//   setInterval(function() {
//     currentTitle = pickRandomNumber(lastTitle)
//     lastTitle = currentTitle
//     $('#adjOne').text(titles[currentTitle]);
//   }, 3000);
// })

  // Cycle down the array
  setInterval(function(){
    if(currentTitle === titles.length){
      currentTitle = 0
      $('#adjOne').text(titles[currentTitle]);
      currentTitle = currentTitle + 1
    } else {
      $('#adjOne').text(titles[currentTitle]);
      currentTitle = currentTitle + 1
    }
  }, 2000);



// Nav links, shifting divs
  // top about me link
    $('.aboutmeLink').on('click', function(){
      $('#home').animate({'top': '90vh'}, 1000);
      $('.aboutmeLink').css('border', '2px solid white');
      window.setTimeout(function(){
        $('nav a').addClass('visible');
      }, 1050);
    });


  // top home link
    $('.homeLink-top').on('click', function(){
      $('#home').animate({'top': '0vh'}, 1000);
      $('.aboutmeLink').css('border', 'none');
      $('nav a').removeClass('visible');
    });


  // top work link
    $('.workLink-top').on('click', function(){
      window.setTimeout(function(){
        $('#aboutme').css('display', 'none');
      }, 400);
      $('#home').animate({'top': '-90vh'}, 800);
      $('.aboutmeLink').css('border', 'none');
      $('nav a').removeClass('visible');
      window.setTimeout(function(){
        $('nav a').addClass('visible');
      }, 1050);
    });


  // bottom work link
    $('.workLink').on('click', function(){
      $('#aboutme').css('display', 'none');
      $('#home').animate({'top': '-90vh'}, 1000);
      $('.workLink').css('border', '2px solid white');
      window.setTimeout(function(){
        $('nav a').addClass('visible');
      }, 1050);
    });


  // bottom home link
    $('.homeLink-bottom').on('click', function(){
      window.setTimeout(function(){
        $('#aboutme').css('display', 'block');
      }, 1100);
      $('#home').animate({'top': '0vh'}, 1000);
      $('.workLink').css('border', 'none');
      $('nav a').removeClass('visible');
    });


  // bottom about me link
    $('.aboutmeLink-bottom').on('click', function(){
      window.setTimeout(function(){
        $('#aboutme').css('display', 'block');
      }, 400);
      $('#home').animate({'top': '90vh'}, 800);
      $('.workLink').css('border', 'none');
      $('nav a').removeClass('visible');
      window.setTimeout(function(){
        $('nav a').addClass('visible');
      }, 1050);
    });

// end nav links










});
