
$(document).ready(function(){ 
	//store quetsions, answer options, and answer key
	var allQuestions = {
	question: ["Who is Prime Minister of the United Kingdom?", "Which of the \
	following is not a breed of dog?", "What sound does a pig make?", "When presented dessert menu, \
	which item would Anne most likely order?"],
	choices: [" David Cameron", " Gordon Brown", " Winston Churchill", " Retriever" , " Poodle", " Tabby", " Moo", " Oink", " Meow", "Salted Caramel Ice Cream", "Lime and Ginger Sorbet", "Double Chocolate Cake"],
	answers: [1,1,3,2,3],
	};

	//global counters for each of the questions and answer choices
	var q = 0;
	var rb1= 0;
	var rb2=1;
	var rb3=2;
	var ans=0;

	//array to store the amount of correct and incorrect user answers
	var userScore = {
	correct: 0,
	incorrect: 0, 
	} 

	//when button is clicked, progress the current question to show the next question, and the
	//radio buttons to show the next answer options.  
	$('button').click(function(){
		//locate the current question and answer choices and attribute them to variables
        var currentQuestion = (allQuestions.question[q]);
        var currentRadio1 = (allQuestions.choices[rb1]);
        var currentRadio2 = (allQuestions.choices[rb2]);
        var currentRadio3 = (allQuestions.choices[rb3]);
        var currentAnswer = (allQuestions.answers[ans]);
        //update html to display the current question and answer choices
        $('.questions').html(currentQuestion);
        $('#r1').html(currentRadio1);
		$('#r2').html(currentRadio2);
		$('#r3').html(currentRadio3);
		//progress the question and answer choice counters
		q = q + 1;
		rb1 = rb1 + 3;
		rb2 = rb2 + 3;
		rb3 = rb3 + 3;
		ans = ans + 1;

		//Compare the user's answer (the selected radio button) to the correct answer. 
		//Do this by having the code look at all the radio buttons. If the checked one 
		//is equal to the correct answer, increment "correct" in <userScore>. 
		//If incorrect, increment "incorrect" in <userScore>.
		if ($('input[name="radios"]:checked').val() == currentAnswer){
		userScore.correct++;
		} else{
		    userScore.incorrect++;
		}
		
		//When there's no more questions, alert the total correct and incorrect answers
		if ((ans+1)>allQuestions.answers.length){
		alert("Thank you for playing! Here's your score:\n" + "\nCorrect: " + userScore.correct + "\nIncorrect: " + userScore.incorrect)	
		}
	});
});



//Psuedocode:
//Use a JS object to separately hold each group of: questions, choices and correct answers.
//Use a JS function so that when <button> is clicked, it:
	//**removes the current text from the <.questions> DIV
	//**clears the radio buttons
	//**adds the next question's text from <allQuestions> to the <.questions> DIV
	//**adds the next anwers the radio buttons 
//Use a JS object to store each of the user's answers, which are determined by which
	//radio button is selected when <button> is clicked. 
//If user clicks <button> without first selecting a radio button, do not update the form, and
	//do not store their answer. Instead, alert the user.
//On the final page, let the user know they are done. Tally and display the total
	//amount of correct answers. 
