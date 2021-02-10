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
function q1(answer){
    if (answer === 'no' ||answer === 'n') {
        score++;
        console.log('You Are Correct ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
       return('You Are Correct ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
    
    } else if (answer === 'yes' || answer === 'y') {
    
        console.log('⛔ You Are Wrong ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
        return('⛔ You Are Wrong ' + userName + ' ! , My name Isn\'t Ali , Its Ahmed !');
    
    } else {
        console.log(userName + '! Your answer is not valid 😡');
       return(userName + '! Your answer is not valid 😡');
    }
    
}
alert(q1(myName));



//##############################Question 2#################################//

let myAge = prompt(userName + '! Am I 26 Years old?');
myAge.toLowerCase();
function q2(answer)
{
    if (answer === 'no' || answer === 'n') {
        score++;
        console.log('You Are Correct ' + userName + ' ! ,I Just turned 27 Years old :)');
        return('You Are Correct ' + userName + ' ! ,I Just turned 27 Years old :)');
    
    } else if (answer === 'yes' || answer === 'y') {
    
        console.log('⛔ You Are Wrong ' + userName + ' ! , I Just turned 27 Years old :)');
        return('⛔ You Are Wrong ' + userName + ' ! , I Just turned 27 Years old :)');
    
    } else {
        console.log(userName + '! Your answer is not valid 😡');
        return(userName + '! Your answer is not valid 😡');
    }

}

alert(q2( myAge));

//##############################Question 3#################################//
let myHair = prompt(userName + '! Am I Blonde?');
myHair.toLowerCase();
function q3(answer){

    if (answer === 'no' ||answer === 'n') {
        score++;
        console.log('You Are Correct ' + userName + ' Im Not Blonde :)');
       return('You Are Correct ' + userName + ' ! , Im Not Blonde :)');
    
    } else if (answer === 'yes' || answer === 'y') {
    
        console.log('⛔ You Are Wrong ' + userName + ' ! , Im Not Blonde :)');
       return('⛔ You Are Wrong ' + userName + ' ! , Im Not Blonde :)');
    
    } else {
        console.log(userName + '! Your answer is not valid 😡');
       return(userName + '! Your answer is not valid 😡');
    }
    
      
}
alert(q3(myHair));


//##############################Question 4#################################//

let myEyes = prompt(userName + '! My Eyes color are Blue🔵?');
myEyes.toLowerCase();
function q4(answer){

    if (answer === 'no' || answer === 'n') {
        score++;
        console.log('You Are Correct ' + userName + ' My Eyes Are Dark Brown :)');
        return('You Are Correct ' + userName + ' ! , My Eyes Are Dark Brown :)');
    
    } else if (answer === 'yes' || answer === 'y') {
    
        console.log('⛔ You Are Wrong ' + userName + ' ! ,My Eyes Are Dark Brown :)');
      return('⛔ You Are Wrong ' + userName + ' ! , My Eyes Are Dark Brown :)');
    
    } else {
        console.log(userName + '! Your answer is not valid 😡');
        return(userName + '! Your answer is not valid 😡');
    
}

}
alert(q4(myEyes));


//##############################Question 5#################################//

let myGlasses = prompt(userName + '! Do I wear glasses 👓?');
myGlasses.toLowerCase();
function q5(answer){


if (answer === 'yes' || answer === 'y') {
    score++;
    console.log('You Are Correct ' + userName + ' I Do wear glasses :)');
    return('You Are Correct ' + userName + ' ! , I Do wear glasses :)');

} else if (answers === 'no' || answer === 'n') {

    console.log('You Are ⛔ Wrong ⛔' + userName + ' ! ,I Do wear glasses :)');
    return('⛔ You Are Wrong ⛔ ' + userName + ' ! , I Do wear glasses :)');

} else {
    console.log(userName + '! Your answer is not valid 😡');
    return(userName + '! Your answer is not valid 😡');
}
}
alert(q5(myGlasses));


//##############################Question 6#################################//

let index = 0;
function q6( ){
for (index; index < 4; index++) {
    let userNum = prompt(userName + '! Guess the correct number between 1 and 20 inclusive');

    if (randomNum === parseInt(userNum)) {
        
        score++;return('Your answer is Correct ' + userName + '!, The number is ' + randomNum);
        
       
    } else if (randomNum > parseInt(userNum)) {

        alert('Your answer is Lower than the currect answer, you have (' + (4 - (index + 1)) + ') Remaining Try(s)');

    } else if (randomNum < parseInt(userNum)) {

        alert('Your answer is Higher than the currect answer, you have (' + (4 - (index + 1)) + ') Remaining Try(s)');

    }
    if (index === 4) {

        alert('Hrad Luck ' + userName + ' :( , The right answer is ' + randomNum);
    
    }
}
}
alert(q6( ));




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
