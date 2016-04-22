var titles = [ 'ad tech ninja', 'kung-fu master', 'hardcore gamer', 'dog lover', 'hard-ish worker', 'front-end wizard', 'freestyle dancer', 'Chandler Bing', 'Golden State Warrior', 'Triton',  ]
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
  }, 3000);



// Nav links, shifting divs
  // top about me link
  $(document).ready(function(){
    $('.aboutmeLink').on('click', function(){
      $('#home').animate({'top': '90vh'}, 1000);
    });
  });

  // top home link
  $(document).ready(function(){
    $('.homeLink-top').on('click', function(){
      $('#home').animate({'top': '0vh'}, 1000);
    });
  });

  // top work link
  $(document).ready(function(){
    $('.workLink-top').on('click', function(){
      $('#home').animate({'top': '-90vh'}, 800);
      $('#aboutme').css('display', 'none'); // need to figure out delay, fade?
    });
  });

  // bottom work link
  $(document).ready(function(){
    $('.workLink').on('click', function(){
      $('#aboutme').css('display', 'none');
      $('#home').animate({'top': '-90vh'}, 1000);
    });
  });

  // bottom home link
  $(document).ready(function(){
    $('.homeLink-bottom').on('click', function(){
      $('#aboutme').css('display', 'block'); // might need delay too
      $('#home').animate({'top': '0vh'}, 1000);
    });
  });

  // bottom about me link
  $(document).ready(function(){
    $('.aboutmeLink-bottom').on('click', function(){
      $('#aboutme').css('display', 'block'); // might need delay too
      $('#home').animate({'top': '90vh'}, 800);
    });
  });
// end nav links

  // $('#aboutme').visible('diplay', 'block');





















});
