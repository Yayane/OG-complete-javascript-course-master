/*********************
CODING CHALLENGE 1 */
/*
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
/*
var johnFirstGame = 89;
var johnSecondGame = 120;
var johnThirdGame = 103;

var johnAverage = (johnFirstGame + johnSecondGame + johnThirdGame) / 3;

var markFirstGame = 89;
var markSecondGame = 120;
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
} else if (markAverage > johnAverage && markAverage > maryAverage) {
    console.log ('Mark\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
} else if (maryAverage > johnAverage && maryAverage > markAverage) {
    console.log ('Mary\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
} else if (markAverage === johnAverage && markAverage > maryAverage) {
    console.log ('Mark\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
} else if (markAverage === maryAverage && markAverage > johnAverage) {
    console.log ('Mark\'s and Mary\'s teams are equally good at basketball with an average score of ' + markAverage + ' points.');
} else if (maryAverage === johnAverage && maryAverage > markAverage) {
    console.log ('Mary\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
} else if (maryAverage === johnAverage && johnAverage === markAverage) {
    console.log ('All three teams Mark\'s, Mary\'s and John\'s are equally good at basketball with an average score of ' + johnAverage + ' points.');
}


switch (true) {
    case johnAverage > markAverage && johnAverage > maryAverage: 
        console.log ('John\'s team is the best basketball team with an average score of ' + johnAverage + ' points.');
        break;
    case markAverage > johnAverage && markAverage > maryAverage:
        console.log ('Mark\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
        break;
    case maryAverage > johnAverage && maryAverage > markAverage:
        console.log ('Mary\'s team is the best basketball team with an average score of ' + markAverage + ' points.');
        break;
    case markAverage === johnAverage && markAverage > maryAverage:
        console.log ( 'Mark\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
        break;
    case markAverage === maryAverage && markAverage > johnAverage:
        console.log ('Mark\'s and Mary\'s teams are equally good at basketball with an average score of ' + markAverage + ' points.');
        break;
    case maryAverage === johnAverage && maryAverage > markAverage:
        console.log ('Mary\'s and John\'s teams are equally good at basketball with an average score of ' + johnAverage + ' points.');
        break;
    case maryAverage === johnAverage && johnAverage === markAverage:
        console.log ('All three teams Mark\'s, Mary\'s and John\'s are equally good at basketball with an average score of ' + johnAverage + ' points.');
        break;
}
        
*/


/**********************
CODING CHALLENGE 3
*/

/*
function calculateTip(bill){
    if (bill < 50) {
        return bill * 0.2;
    } else if (bill >=50 && bill < 200) {
        return bill * 0.15;
    } else if (bill >= 200) {
        return bill * 0.1;
    }
}
*/

/*
var calculateTip = function(bill){
     switch (true) {
        case bill < 50 :
             return bill * 0.2;
         case bill >= 50 && bill < 200:
             return bill * 0.15;
         case bill >= 200:
             return bill * 0.1;
    }
}

var bill = prompt('Hi! Let\'s calculate the tip for your bill! What is the amount of your bill today?');
console.log ('You should tip $' + calculateTip(bill) + ' to the waiter.');

console.log ('And here are my answers to the third coding challenge:');

var bills = [124, 48, 268];
//console.log('The three bills without tip are: ' + (bills));

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])]
console.log('The three tips are: ' + (tips));

var totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2],]
console.log('The three total bills to be paid are: ' + (totals));

console.log('The three tips are: ');
for (var i = 0; i < bills.length; i++) {
    var tips = [calculateTip(bills[i])]
console.log(tips);
}

console.log('The three total bills to be paid are: ');
for (var i= 0; i <bills.length; i++) {
    if (bills[i] === tips[i]) {
    var totals = [bills[i] + tips[i]]
    }
console.log(totals[i]);
}
*/

/*
console.log('The three total bills to be paid are: ');
for (var i = 0; i < bills.length; i++) {
    var totals = [(bills[i]) + (tips[i])]
console.log(totals);
}

console.log('The three total bills to be paid are: ');
var i = 0;
while (i < bills.length){
    var totals = [bills[i] + tips[i]];
console.log(totals);
    i++;
}
*/


/**********************
CODING CHALLENGE 4
*/

/*
var john = {
    firstName: 'John',
    mass: 80,
    height: 1.7,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};


var mark = {
    firstName: 'Mark',
    mass: 65,
    height: 2,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

john.calcBMI();
mark.calcBMI();

var johnHigherBMI = john.BMI > mark.BMI;
var sameBMI = john.BMI === mark.BMI;

if (sameBMI === true) {
    console.log('Both John and Mark have the same BMI. Their BMI is ' + mark.BMI);
} else if (sameBMI === false && johnHigherBMI === true) {
console.log('John has a higher BMI than Mark. His BMI is ' + john.BMI);
} else if (sameBMI === false && johnHigherBMI === false) {
    console.log('Mark has a higher BMI than John. His BMI is ' + mark.BMI);
};

*/


/**********************
CODING CHALLENGE 5
*/

/* 
var bills = {
    all: [124,48,268,180,42],
    first: 124,
    second: 48,
    third: 268,
    fourth: 180,
    fifth: 42,
    calcTip: function(bill) {
        switch(true){
            case bill < 50 :
                return bill * 0.2;
            case bill >= 50 && bill < 200:
                return bill * 0.15;
            case bill >= 200:
                return bill * 0.1;
        }
    }
};

for (var i = 0; i < bills.all.length; i++) {
    var tips = [bills.calcTip(bills.all[i])]
console.log(tips);
};

for (var i = 0; i < bills.all.length; i++) {
    var tips = [bills.calcTip(bills.all[i])]
    var totals = [bills.all[i] + tips[i]]
console.log(totals);

};

*/

 
var john = {
    name: 'John',
    bills: [124,48,268,180,42],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            this.tips[i] = bill * percentage;
            this.totals[i] = bill + bill * percentage;
        }
    }
};

john.calcTips();
console.log(john.tips);
console.log(john.totals);


var mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.totals[i] = bill + bill * percentage;
        }
    }
};

mark.calcTips();
console.log(mark.tips);
console.log(mark.totals);



/* 
var john = {
    name: 'John',
    bills: [124,48,268,180,42],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            
            this.tips[i] = bill * percentage;
            this.totals[i] = bill + bill * percentage;
            
        }
    }
};


var mark = {
    name: 'Mark',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.totals = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            this.tips[i] = bill * percentage;
            this.totals[i] = bill + bill * percentage;
            
        }
    }
};


function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
*/
































