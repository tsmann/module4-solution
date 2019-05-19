(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    var speakWord = "Hello";
    //var helloSpeaker = {};
        console.log(speakWord + " " + name);
    }
  window.helloSpeaker = helloSpeaker;
    })(window);
