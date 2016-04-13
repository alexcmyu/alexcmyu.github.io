var titles = [ 'front-end wizard', 'ad tech ninja', 'kung-fu master', 'hardcore gamer', 'dog lover', 'hard-ish worker', 'freestyle dancer', 'Chandler Bing', 'times ten equals five', 'Golden State Warrior', 'Triton',  ]
var init = 0

$(document).ready(function(){
event.preventDefault()



  var randomNumber = function(prev) {
      var next = Math.floor(Math.random() * titles.length);
      while(prev === next) {
        next = Math.floor(Math.random() * titles.length);
      }
      return next;
  }


  setInterval(function(){
    if (init == 0 || init > titles.length) {
      init = 0;
      $('#adjOne').text(titles[init]);
      init = init + 1;
    } else {
      init = randomNumber();
      $('#adjOne').text(titles[init]);
    }
  }, 3000);

  $('#adjOne').text(titles[init]);

})

//
// // defining var in array
//   var randomNumber = function(prev) {
//     var next = Math.floor(Math.random() * titles.length);
//     while(prev === next) {
//       next = Math.floor(Math.random() * titles.length);
//     }
//     return next;
//   }
//
// // initial
//   var adj1 = 0,
//     // adj2 = 1;
//
// // Loop
//   setInterval(function() {
//     adj1 = randomNumber(adj1);
//   //   adj2 = randomNumber(adj2);
//   //
//   //   while(adj1 === adj2) {
//   //     adj1 = randomNumber(adj1);
//   //     adj2 = randomNumber(adj2);
//   //   }
//
//     $('#adjOne').text(titles[adj1]);
//     // $('#adjTwo').text(titles[adj2]);
//   }, 3000)
//
// // initial
//   $('#adjOne').text(titles[adj1]);
//   // $('#adjTwo').text(titles[adj2]);
//
// });
