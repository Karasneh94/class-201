'use strict';

let score = 0;
let randomNum = (Math.floor(Math.random() * Math.floor(19))) + 1;
let answers = [0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i < answers.length; i++) {
    answers[i] = (Math.floor(Math.random() * Math.floor(24))) + 1;
}
console.log('cheat answer question 6 ' + randomNum);
console.log('cheat answer question 7 ' + answers);

let userName = prompt('Hello There! , What do you prefer us to call you?');
alert('Before you enter my \' About Me \' page, I wanna see how well you know me by answering yes or no questions :D');



//##############################Question 1#################################//

let myName = prompt(userName + '! Are you visiting the about me page of Ali?');
myName.toLowerCase();

if (myName === 'no' || myName === 'n') {
    score++;
    console.log('You Are Correct ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
    alert('You Are Correct ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');

} else if (myName === 'yes' || myName === 'y') {

    console.log('⛔ You Are Wrong ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
    alert('⛔ You Are Wrong ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    alert(userName + '! Your answer is not valid 😡');
}

//##############################Question 2#################################//

let myAge = prompt(userName + '! Am I 26 Years old?');
myAge.toLowerCase();

if (myAge === 'no' || myAge === 'n') {
    score++;
    console.log('You Are Correct ' + userName + ' ! ,I Just turned 27 Years old :)');
    alert('You Are Correct ' + userName + ' ! ,I Just turned 27 Years old :)');

} else if (myAge === 'yes' || myAge === 'y') {

    console.log('⛔ You Are Wrong ' + userName + ' ! , I Just turned 27 Years old :)');
    alert('⛔ You Are Wrong ' + userName + ' ! , I Just turned 27 Years old :)');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    alert(userName + '! Your answer is not valid 😡');
}

//##############################Question 3#################################//

let myHair = prompt(userName + '! Am I Blonde?');
myHair.toLowerCase();

if (myHair === 'no' || myHair === 'n') {
    score++;
    console.log('You Are Correct ' + userName + ' Im Not Blonde :)');
    alert('You Are Correct ' + userName + ' ! , Im Not Blonde :)');

} else if (myHair === 'yes' || myHair === 'y') {

    console.log('⛔ You Are Wrong ' + userName + ' ! , Im Not Blonde :)');
    alert('⛔ You Are Wrong ' + userName + ' ! , Im Not Blonde :)');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    alert(userName + '! Your answer is not valid 😡');
}


//##############################Question 4#################################//

let myEyes = prompt(userName + '! My Eyes color are Blue🔵?');
myEyes.toLowerCase();

if (myEyes === 'no' || myEyes === 'n') {
    score++;
    console.log('You Are Correct ' + userName + ' My Eyes Are Dark Brown :)');
    alert('You Are Correct ' + userName + ' ! , My Eyes Are Dark Brown :)');

} else if (myEyes === 'yes' || myEyes === 'y') {

    console.log('⛔ You Are Wrong ' + userName + ' ! ,My Eyes Are Dark Brown :)');
    alert('⛔ You Are Wrong ' + userName + ' ! , My Eyes Are Dark Brown :)');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    alert(userName + '! Your answer is not valid 😡');
}

//##############################Question 5#################################//

let myGlasses = prompt(userName + '! Do I wear glasses 👓?');
myGlasses.toLowerCase();

if (myGlasses === 'yes' || myGlasses === 'y') {
    score++;
    console.log('You Are Correct ' + userName + ' I Do wear glasses :)');
    alert('You Are Correct ' + userName + ' ! , I Do wear glasses :)');

} else if (myGlasses === 'no' || myGlasses === 'n') {

    console.log('You Are ⛔ Wrong ⛔' + userName + ' ! ,I Do wear glasses :)');
    alert('⛔ You Are Wrong ⛔ ' + userName + ' ! , I Do wear glasses :)');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    alert(userName + '! Your answer is not valid 😡');
}


//##############################Question 6#################################//

let index = 0;
for (index; index < 4; index++) {
    let userNum = prompt(userName + '! Guess the correct number between 1 and 20 inclusive');

    if (randomNum === parseInt(userNum)) {
        alert('Your answer is Correct ' + userName + '!, The number is ' + randomNum);
        score++;
        break;
    } else if (randomNum > parseInt(userNum)) {

        alert('Your answer is Lower than the currect answer, you have (' + (4 - (index + 1)) + ') Remaining Try(s)');

    } else if (randomNum < parseInt(userNum)) {

        alert('Your answer is Higher than the currect answer, you have (' + (4 - (index + 1)) + ') Remaining Try(s)');

    }

}

if (index === 4) {

    alert('Hrad Luck ' + userName + ' :( , The right answer is ' + randomNum);

}

//##############################Question 7#################################//

let j = 0;
for (j; j < 6; j++) {
    let userNum = prompt(userName + '! Guess the correct number between 1 and 25 inclusive');

    if (answers.indexOf(parseInt(userNum)) !== -1) {
        alert('Your answer is Correct ' + userName + '!, The number is ' + userNum);
        score++;
        break;
    } else if (answers.indexOf(parseInt(userNum)) === -1) {

        alert('Your answer is Wrong, you have (' + (6 - (j + 1)) + ') Remaining Try(s)');

    }

}

if (j === 6) {

    alert('Hrad Luck ' + userName + ' :( , The right possible answers are ' + answers);

}

//#######################################################################//

alert(userName + '!, Your score is: ' + score + '/7');
