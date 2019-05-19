(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function (names) {
var speakWord = "Good Bye";
  console.log(speakWord + " " + names);
}
 window.byeSpeaker = byeSpeaker;
  })(window);
