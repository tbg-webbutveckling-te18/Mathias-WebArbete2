

document.writeln('<br> Blinka lila stjärna där <br>')
document.writeln('Hur jag undrar var du är <br>')
document.writeln('Fjärran lockar du min syn <br>')
document.writeln('Lik en diamant i skyn <br>')

document.writeln('<br>')

document.writeln('Blinka lila stjärna där <br>')
document.writeln('Hur jag undrar var du är <br>')
document.writeln('Fjärran lockar du min syn <br>')
document.writeln('Lik en diamant i skyn <br>')

document.writeln('-----------------------------------------------------------------------------------<br>')

function twinkle() {
    document.writeln('Blinka lila stjärna där <br>')
    document.writeln('Hur jag undrar var du är <br>')
    document.writeln('Fjärran lockar du min syn <br>')
    document.writeln('Lik en diamant i skyn <br>')

    document.writeln('<br>')
}

twinkle();
twinkle();

document.writeln('-----------------------------------------------------------------------------------<br>')

function square(num) {
    document.writeln(num * num)
}

square(10)





document.writeln('<br>-----------------------------------------------------------------------------------<br>')


function area(width, height) {
    return width * height;
}

document.writeln('<br> The area is: ' + area(5, 10))

var result = area(6, 9);

document.writeln('<br>' + result)

function quadropelme(x) {
    return 4 * x;
}

var myNumber = quadropelme(4)

/* Select an element */

var btnNumber = document.getElementById("myNumber");

// Manipulate element
btnNumber.innerHTML = "My favorite number is " + myNumber

// Function att göra första bokstaven stor
function capitalize(str) {
    return str.charAt('').toUpperCase() + str.slice(1);
}

var city = 'stockholm';
var capital = capitalize(city);
document.writeln('<br> Captial of Sweden is: ' + capital)

document.writeln('<br>-----------------------------------------------------------------------------------<br>')

var numberStart = 0;
var numberEven = numberStart++;

function isEven(numberEven) {
    if (numberEven % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

document.writeln('Even numbers are: ' + isEven(2))

document.writeln('<br>-----------------------------------------------------------------------------------<br>')



function kebabToSnake(str) {
    var snakeCasedStr = str.replace('-', '_')
    return snakeCasedStr;
}

document.writeln(kebabToSnake('Hej-jag-heter-Mathias'))

/*
***************************************
            JS Scope
***************************************
*/
var p = document.getElementById('scopes'); // global scope
// What happends in the function stays in the function
// declare
function localScope() {
    var x = 1;
    var localVar = 31;
    p.innerHTML = localVar;
}
// call
localScope();
var globalVar = 'This is a global variable';
p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#639';
function changeGlobalVar() {
    var x = 2;
    globalVar = 'Ha ha I got a new value now!';
    p.innerHTML = globalVar;
}
// call
changeGlobalVar();
function tricky() {
    var x = 3;
    var globalVar = 'Am I a local variable?';
    p.innerHTML = globalVar;
}
// call
tricky();
p.innerHTML = globalVar;
/*
***************************************
    JS Scope - muntligt test
***************************************
*/
// Förklara vad som händer
var num = 8;
function doMath() {
    num += 1;
    if (num % 5 === 0) {
        return true;
    } else {
        return false;
    }
}
num += 1;
doMath();
// Förklara vad som händer
function hi() {
    var name = 'Dennis';
    console.log(name);
}
hi();
function bye() {
    console.log(name);
}
bye();
/*
***************************************
JS functions - higher order functions
Simple explanation: A function that can take another function as an argument
***************************************
*/
function myTimer() {
    var d = new Date();
    var clock = document.getElementById('clock');
    clock.innerHTML = d.toLocaleTimeString();
}
myTimer();
var seconds = setInterval(myTimer, 1000); // function name and interval in milliseconds
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');
btnStopTime.addEventListener('click', function() {
    clearInterval(seconds);
    doomsStr.innerHTML = 'Ha Ha! Time is stopped forever!';
    doomsStr.style.transition = 'all .4s ease';
    doomsStr.style.fontSize = '20px';
    doomsStr.style.color = 'crimson';
});

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var output = document.getElementById('tellFortune');
var btnFortune = document.getElementsByTagName('button')[2];

function tellFortune(job, city, partner, kids) {
    output.innerHTML = `You will be a ${job} in ${city} and married to ${partner} with ${kids} kids`
}

var jobArr = ['Game designer', 'Web Developer', 'Homeless', 'Youtuber', 'Streamer'];
var cityArr = ['Lycksele', 'Stockholm', 'New York', 'Moscow', 'Fucking'];
var partnerArr = ['Kenneth', 'Leif', 'Susan', 'Michelle', 'Igor'];
var kidsArr = ['0', '1', '2', '3', '4'];

btnFortune.addEventListener('click', function() {
    var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomCity = cityArr[Math.floor(Math.random() * cityArr.length)];
    var randomPartner = partnerArr[Math.floor(Math.random() * partnerArr.length)];
    var randomKids = kidsArr[Math.floor(Math.random() * kidsArr.length)];

    tellFortune(randomJob, randomCity, randomPartner, randomKids)
});

var output = document.getElementById('dogYears')

function calculateDogAge(puppy, human) {
    var dogAge = puppy * 7;
    var humanAge = Math.round(human / 7)
    output.innerHTML = `<br>Your doggie is ${dogAge} years old in dog years <br>and your human age is ${humanAge}`
}

calculateDogAge(6, 21);

function calculateSupply(snack, age) {
    var timeAge = 100 - age;
    var snackNeeded = Math.round((timeAge * 365) * snack);
    document.writeln(`<br>You got ${timeAge} years left to live and the amount of snacks to survive is ${snackNeeded}`);
}


calculateSupply(2, 21)