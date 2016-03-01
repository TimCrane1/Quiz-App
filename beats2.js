
$(document).ready(function(){
	var arrPosition = 0;
	var questionsCorrect = 0;
    var questionsAnswered = 0;
	$('#quest').on('click', function() {
		$('#rules').text(listQuest[arrPosition].query + '...Beatles or Beat?');
	});
	$('.choice').on('click', function() {
		if ($(this).text() == listQuest[arrPosition].answer) {
			$('#rules').text('Correct! ' + listQuest[arrPosition].explanation);
		questionsCorrect += 1;
	}
		else {
			$('#rules').text('That wasn\'t right. ' + listQuest[arrPosition].explanation);
		}
		arrPosition += 1;
		questionsAnswered += 1;

		if (arrPosition < listQuest.length) {
			$('#quest').text('question #' + (arrPosition + 1));
		}
	    var count = questionsCorrect + " out of " + questionsAnswered + "  questions correct";
		$('#tally').text(count);
	});
  
function question(query, answer, explanation) {
	this.query = query;
	this.answer = answer;
	this.explanation = explanation;
}
var question1 = new question('Because the world is round it turns me on', 'Beatles', 'Line #1 is if from the Beatles song, \"Because\". Click on the next question.');
var question2 = new question('I\'m with you in Rockland, where you must feel very strange', 'Beat', 'Line #2 is from Allen Ginsgerg\'s poem, "Howl". Click on the next question.');
var question3 = new question("Yellow matter custard, Dripping from a dead dog\'s eye", 'Beatles', 'Line #3 is from the Beatles song, "I Am the Walrus". Click on the next question.');
var question4 = new question('You were not there for the beginning. You will not be there for the end.', 'Beat', 'Line #4 is from the William S. Burroughs novel, "Naked Lunch". Click on the next question.');
var question5 = new question("Let\'s all get up and dance to a song that was a hit before your mother was born", 'Beatles', 'Line #5 is from the Beatles song, "Your Mother Should Know". Good game!');
var listQuest = [question1, question2, question3, question4, question5];
});




