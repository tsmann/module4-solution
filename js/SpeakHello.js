(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function (names) {
  var speakWord = "Hello";
        console.log(speakWord + " " + names);
    }
  window.helloSpeaker = helloSpeaker;
    })(window);
