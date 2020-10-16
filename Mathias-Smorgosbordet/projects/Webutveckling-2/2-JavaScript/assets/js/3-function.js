

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
    var snakeCasedStr = str.replace(/-/, '_')
    return snakeCasedStr;
}

document.writeln(kebabToSnake('Hej-jag-heter-Mathias'))










