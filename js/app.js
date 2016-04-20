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


setInterval(function(){
  if(currentTitle === titles.length){
    currentTitle = 0
    // console.log('zero')
    $('#adjOne').text(titles[currentTitle]);
    currentTitle = currentTitle + 1
  } else {
    // console.log('else')
    $('#adjOne').text(titles[currentTitle]);
    currentTitle = currentTitle + 1
  }

}, 3000);


$(document).ready(function(){
  $('.aboutmeLink').on('click', function(){
      $("#home").animate({'margin-top': 600}, 1000);
  });
});

$(document).ready(function(){
  $('.workLink').on('click', function(){
      // $("#mywork").animate({'margin-bottom': 600});
      $('#home').animate({'margin-bottom': 600}, 1000);
  });
});


// Home page nav links
// $('.aboutmeLink').click(function(){
//   $('#aboutme').css({
//     'display':'block',
//   })
// })
//
// $('.aboutmeLink').click(function(){
//   $('#home').css({
//     'display':'none',
//   })
// })
//
// $('.workLink').click(function(){
//   $('#mywork').css({
//     'display':'block',
//   })
// })
//
// $('.workLink').click(function(){
//   $('#home').css({
//     'display':'none',
//   })
// })



});
