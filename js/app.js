var titles = [ 'front-end wizard', 'ad tech ninja', 'kung-fu master', 'hardcore gamer', 'dog lover', 'hard-ish worker', 'freestyle dancer', 'Chandler Bing', 'Golden State Warrior', 'Triton',  ]
var currentTitle = 0
var lastTitle

$(document).ready(function() {
event.preventDefault()

  var pickRandomNumber = function() {
      return Math.floor(Math.random() * titles.length);
  }

  setInterval(function() {
    currentTitle = pickRandomNumber()

    // while (currentTitle === lastTitle){
    //   pickRandomNumber()
    // }

    $('#adjOne').text(titles[currentTitle]);

  }, 3000);
})
