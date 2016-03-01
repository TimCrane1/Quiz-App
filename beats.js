
$(document).ready(function(){
	$('#quest').on('click', function() {
		var i =0;
		for(i = 0; i < listQuest.length; i++) {
			alert(i);
			$('#rules').text(listQuest[i].query + '...Beatles or Beat?');
	$('.choice').on('click', function() {
		$('#rules').text('Correct! ' + listQuest[i]);
});
}
});
 
function question(query, answer, explanation) {
	this.query = query;
	this.answer = answer;
	this.explanation = explanation;
}
var question1 = new question('Because the world is round it turns me on', 'Beatles', 'Line #1 is if from the Beatles song, \"Because\".');
var question2 = new question('I\'m with you in Rockland, where you must feel very strange', 'Beat', 'Line #2 is from Allen Ginsgerg\'s poem, "Howl".');
var question3 = new question("Yellow matter custard, Dripping from a dead dog\'s eye", 'Beatles', 'Line #3 is from the Beatles song, "I Am the Walrus".');
var question4 = new question('You were not there for the beginning. You will not be there for the end.', 'Beat', 'Line #4 is from the William S. Burroughs novel, "Naked Lunch".');
var question5 = new question("Let\'s all get up and dance to a song that was a hit before your mother was born", 'Beatles', 'Line #5 is from the Beatles song, "Your Mother Should Know".');
var listQuest = [question1, question2, question3, question4, question5];
var questionsCorrect = [];
var questionsAnswered = [];
var footer = questionsCorrect + " out of " + questionsAnswered + " correct";

});



/*this is what I want to do in pseudo-code
onclick #quest <button>,
#rules <p> gets replaced by  question1.query,
onclick .choice <button>, 
if (.choice == .query) {push 1 to questionsCorrect and Answered arrays, return rightAnswer and footer}
else {push 1 to questionsAnswered, return wrongAnswer and footer}
while(#quest < listQuest.length){#quest = listQuest position + 1}-- i want #quest to be a variable in the html, not text?
*/
