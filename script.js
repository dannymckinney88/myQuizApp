// selectors 
const aGuess = document.getElementById('1');
const bGuess = document.getElementById('2');
const cGuess = document.getElementById('3');
const dGuess = document.getElementById('4');
const guessOption1 = document.getElementById('guess-option1');
const guessOption2 = document.getElementById('guess-option2');
const guessOption3 = document.getElementById('guess-option3');
const guessOption4 = document.getElementById('guess-option4');
const displayQuestion = document.getElementById('question');
const userGuesses = document.querySelector('.user-guess');
const nextButton = document.querySelector('.myButton');
const inputButtons = document.querySelectorAll('input');
const deletDiv = document.querySelector('.container')
const body = document.querySelector('.score')
// Counters
let questionsAnswered = 0;
let currentQuestion = 0;

//globals questions and possible answers
let isChecked = false;
const questions = [
	'What is the rarest blood type?',
	'Which one of these characters is not friends with Harry Potter?',
	'What is the color of Donald Duck’s bowtie?',
	'What was the name of the band Lionel Richie was a part of?',
	'Which animal does not appear in the Chinese zodiac?',
	'Which country held the 2016 Summer Olympics?',
	'Which planet is the hottest?',
	'Who was the only U.S. President to resign?',
	'What does the “D” in “D-Day” stand for?',
	'In which city can you find the Liberty Bell?',
	'In Pirates of the Caribbean, what was the name of Captain Jack Sparrow’s ship? ',
	'According to Forrest Gump, “life was like…” ',
	'inda and Bob from Bob’s Burgers have 3 kids. Which one of these characters is not one of them?',
	'The British band One Direction (rip) was made up of Harry, Louis, Niall, Zayn, and…',
	''
];
const guesses = [
	['A. O', 'B. A', 'C. B', 'D. AB-Negative'],
	['A. Ron Weasley', 'B. Neville Longbottom', 'C. Draco Malfoy', 'D. Hermione Granger'],
	['A. Red', 'B. Yellow', 'C. Blue ', 'D. White'],
	['A. King Harvest', 'B. Spectrums', 'C. Commodores', 'D. The Marshall Tucker Band'],
	['A. Dragon', 'B. Rabbit', 'C. Dog', 'D. Hummingbird'],
	['A. China', 'B. Ireland', 'C. Brazil', 'D. Italy'],
	['A. Venus', 'B. Saturn', 'C. Mercury', 'D. Mars'],
	['A. Herbert Hoover', 'B. Richard Nixon', 'C. Gorge W. Bush', 'D. Barack Obama'],
	['A. Dooms', 'B. Dark', 'C. Denmark', 'D. Dunkirk'],
	['A. Washingron, D.C.', 'B. Boston', 'C. Philadelphia', 'D. Manhattan'],
	['A. The Marauder', 'B. The Black Pearal', 'C. The Black Python', 'D. The Slytherin'],
	['A. A bag of lemons', 'B. A handful of roses', 'C. lollipop', 'D. A box of chocolates'],
	['A. Louise', 'B. Gene', 'C. Jimmy', 'D. Tina'],
	['A. Paul', 'B. Callum', 'C. Kevin', 'D. Liam'],
	['A. ', 'B. ', 'C. ', 'D. '],
];

const correctAnswer = ['d', 'd', 'c', 'a', 'c', 'd', 'c', 'a', 'b', 'd', 'c', 'b', 'd', 'c', 'd'];
let userAnswer = [];
let score = 0;

//Event listener 

nextButton.addEventListener('click', function () {
	isOneChecked()


	if (isChecked === true) {
		getAnswer();
		resetRadioBtn();
		changeQuestions();
		currentQuestion++;
	}
	checkAnswers(correctAnswer, userAnswer)
	endGame()
});
// Chaning HTML to display question 
function changeQuestions() {
	for (questionsAnswered; questionsAnswered <= currentQuestion; questionsAnswered++) {
		displayQuestion.innerHTML = questions[questionsAnswered];
		guessOption1.innerHTML = guesses[questionsAnswered][0];
		guessOption2.innerHTML = guesses[questionsAnswered][1];
		guessOption3.innerHTML = guesses[questionsAnswered][2];
		guessOption4.innerHTML = guesses[questionsAnswered][3];
		isChecked = false;

	}
}

const getAnswer = () => {
	for (let i = 0; i < inputButtons.length; i++) {
		if (inputButtons[i].checked == true) {
			let userGuess = inputButtons[i].value
			userAnswer.push(userGuess)

			return userGuess;
		}
	}
}
const resetRadioBtn = () => {
	for (let i = 0; i < inputButtons.length; i++) {
		if (inputButtons[i].checked == true) {
			inputButtons[i].checked = false
			return inputButtons[i];
		}
	}
}

function isOneChecked() {
	for (var i = 0; i < inputButtons.length; i++) {
		if (inputButtons[i].type == 'radio' && inputButtons[i].checked) {
			isChecked = true;
			return isChecked;
		}
	}
}


function checkAnswers(answers, userAnswers) {
	if (questionsAnswered === 15) {
		for (let i = 0; i < answers.length; i++) {
			if (answers[i] == userAnswers[i]) {
				score = score + 1;
				console.log(score)
			}
		}
	}
}

function endGame() {
	if (currentQuestion === 15) {
		deletDiv.remove()
		const div = document.createElement('P');
		const showScore = document.createTextNode("Your Score :" + score);
		div.appendChild(showScore)
		body.appendChild(div)

	}
}
