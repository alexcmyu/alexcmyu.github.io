var titles = [ 'front-end wizard', 'ad tech ninja', 'kung-fu master', 'hardcore gamer', 'dog lover', 'hard-ish worker', 'freestyle dancer', 'Chandler Bing', 'Golden State Warrior', 'Triton',  ]
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
  $(document).ready(function(){
    $('.aboutmeLink').on('click', function(){
        $('#home').animate({'margin-top': '90vh'}, 1000);
    });
  });

  $(document).ready(function(){
    $('.workLink').on('click', function(){
        $('#aboutme').css('display', 'none');
        $('#home').animate({'top': '-90vh'}, 1000);
    });
  });


});
