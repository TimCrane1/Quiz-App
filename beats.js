/*$(document).ready(function() {
$("#quest").on('click', function() {
  $('#rules').text('\"Because the world is round it turns me on\"...Beatles or Beat?');
});
});*/


function Question(query, answer, explanation) {
this.query = query;
this.answer = answer;
}
var question1 = new Question('Because the world is round it turns me on', 'Beatles', 'Line #1 if from the Beatles song, "Because".');
var question2 = new Question('I\'m with you in Rockland, where you must feel very strange', 'Beat', 'Line #2 is from Allen Ginsgerg\'s poem, "Howl".');
var question3 = new Question("Yellow matter custard, Dripping from a dead dog\'s eye", 'Beatles', 'Line #3 is from the Beatles song, "I Am the Walrus".');
var question4 = new Question('You were not there for the beginning. You will not be there for the end.', 'Beat', 'Line #4 is from the William S. Burroughs novel, "Naked Lunch".');
var question5 = new Question("Let\'s all get up and dance to a song that was a hit before your mother was born", 'Beatles', 'Line #5 is from the Beatles song, "Your Mother Should Know".');
var listQuest = [question1, question2, question3, question4, question5];
var questionsCorrect = [];
var questionsAnswered = [];
var rightAnswer = "Correct! " + listQuest[i].explanation + "Click on " + #quest + " to continue.";
var wrongAnswer = "That's not the right answer. " + listQuest[i].explanation + "Click on " #quest + " to continue."; 
var footer = questionsCorrect + " out of " + questionsAnswered + " correct";
var #quest = listQuest[0];
/*this is what I want to do in pseudo-code
onclick #quest <button>,
#rules <p> gets replaced by  question1.query,
onclick .choice <button>, 
if (.choice == .query) {push 1 to questionsCorrect and Answered arrays, return rightAnswer and footer}
else {push 1 to questionsAnswered, return wrongAnswer and footer}
while(#quest < listQuest.length){#quest = listQuest position + 1}-- i want #quest to be a variable in the html, not text?
*/
 