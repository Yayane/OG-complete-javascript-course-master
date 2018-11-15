/**********************
CODING CHALLENGE 1

var heightJohn = 1.7;
var massJohn = 80;
var BMIJohn = massJohn / (heightJohn * heightJohn);

var heightMark = 2;
var massMark = 65;
var BMIMark = massMark / (heightMark * heightMark); 

var BMIMarkHigher = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + BMIMarkHigher);
*/


/**********************
CODING CHALLENGE 2
*/

var johnFirstGame = 89;
var johnSecondGame = 120;
var johnThirdGame = 103;

var johnAverage = (johnFirstGame + johnSecondGame + johnThirdGame) / 3;

var markFirstGame = 89;
var markSecondGame = 130;
var markThirdGame = 103;

var markAverage = (markFirstGame + markSecondGame + markThirdGame) / 3;

var maryFirstGame = 89;
var marySecondGame = 120;
var maryThirdGame = 103;

var maryAverage = (maryFirstGame + marySecondGame + maryThirdGame) / 3;

var johnHigherScore = johnAverage > markAverage;

if (johnHigherScore = false) {
    console.log (johnHigherScore === 'No it isn\'t.');
} else if (johnHigherScore = true) {
    console.log (johnHigherScore = 'Yes it is.');
}

console.log ('Is Mark\'s team better at basketball than John\'s team? ' + johnHigherScore);

if (johnAverage > markAverage && johnAverage > maryAverage) {
    console.log ('John\'s team is the best basketball team with an average score of ' + johnAverage + ' points.');
} else if ( markAverage > johnAverage && markAverage > maryAverage) {
    console.log ('Mark\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
} else if ( maryAverage > johnAverage && maryAverage > markAverage) {
    console.log ('Mary\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
} else if (markAverage = johnAverage && markAverage > maryAverage) {
    console.log ('Mark\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
} else if (markAverage = maryAverage && markAverage > johnAverage) {
    console.log ('Mark\'s and Mary\'s teams are equally good at basketball with an average score of ' + markAverage + ' points.');
} else if (maryAverage = johnAverage && maryAverage > markAverage) {
    console.log ('Mary\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
}/* else if (maryAverage = johnAverage && johnAverage = markAverage) {
    console.log ('All three teams Mark\'s, Mary\'s and John\'s are equally good at basketball with an average score of ' + johnAverage + ' points.');
}*/










