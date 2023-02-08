// function to populate array names[] with names and check if they start with 'j' or 'J'
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // loop through the names, grabbing first letters
  for (var i = 0; i < names.length; i++) {
    var j = names[i];
    var k = j.charAt(0);
    var firstLetter = k.toLowerCase();

    // console.log(firstLetter)

    // check if those letters are 'j'
    if (firstLetter ==='j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
