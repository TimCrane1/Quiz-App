$(document).ready(function() {

$("#quest").on('click', function() {
  $("#rules").text('"Because the world is round it turns me on"...Beatles or Beat?');
});


});
var listQuest = [question1, question2, question3, question4, question5];


function Question(query, answer) {
this.query = query;
this.answer = answer;
}
var question1 = new Question('Because the world is round it turns me on', 'Line #1 if from the Beatles song, "Because".');
var question2 = new Question('I\'m with you in Rockland, where you must feel very strange', 'Line #2 is from Allen Ginsgerg\'s poem, "Howl".');
var question3 = new Question("Yellow matter custard, Dripping from a dead dog\'s eye", 'Line #3 is from the Beatles song, "I Am the Walrus".');
var question4 = new Question('You were not there for the beginning. You will not be there for the end.', 'Line #4 is from the William S. Burroughs novel, "Naked Lunch".');
var question5 = new Question("Let\'s all get up and dance to a song that was a hit before your mother was born", 'Line #5 is from the Beatles song, "Your Mother Should Know".');