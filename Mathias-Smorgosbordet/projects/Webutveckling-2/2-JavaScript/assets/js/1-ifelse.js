// Greater than
var age = 21;
if (age >= 18) {
    console.log('Du får ta körkortet.')
}
else {
    console.log('Du får inte ta körkortet.')
}

// If something is equal too
var lesson = 'Web development';
if (lesson == 'History') {
    console.log('We have ' + lesson);
}
else if (lesson == 'Web development') {
    console.log('We have ' + lesson);
}
else {
    console.log('Spare time?');
}

var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today.');
}
else {
    console.log('Put on some warm clothes today.');
}

// Step 1
var d = new Date();

if (d.getHours() < 18) {
    console.log("good day");
}
else {
    console.log("good evening");
}

// Step 2
if (d.getHours() < 10) {
    console.log('Good morning!')
}
else if (d.getHours() < 18) {
    console.log('Good day!')
}
else {
    console.log('Good evening!')
}

// Step 3

if (d.getHours() < 10) {
    if(d.getMonth() > 9 || d.getMonth < 2) {
        console.log('Go ahead and sleep like a bear.');
    }
    else {
        console.log('Good morning!');
    }
}
else if (d.getHours() < 18) {
    console.log('Good day!');
}
else {
    console.log('Good evening!');
}

// Step 4

var grade = 'A';
switch(grade) {
    case 'A':
        console.log('Great job!')
        break;
    case 'B':
        console.log('Good job!')
        break;
    case 'C':
        console.log('Alright!')
        break;
    case 'D':
        console.log('Decent!')
        break;
    case 'E':
        console.log('Ok!')
        break;
    case 'F':
        console.log('You did not pass!')
        break;
    
    default:
        console.log('Unknown grade.')
}

// Switch statement för veckodagen

var d = new Date;
switch(d.getDay()) {
    case 0:
        console.log('Sunny for a Sunday')
    case 1:
        console.log('Garfield hates Monday')
    case 2:
        console.log('Tuesday... i got no joke')
    case 3:
        console.log('It is Wednesday my dudes. AAAAAAAAAAAAAHHHHHHHHHHHHHH')
    case 4:
        console.log('Thirsty for a Thursday')
    case 5:
        console.log('Friday is freedom')
    case 6:
        console.log('Saturday is just a free day')
    
    default:
        console.log('Whatever.')
}

