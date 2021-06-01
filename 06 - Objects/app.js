var john = {
    firstName:  'John',
    lastname:   'Stewart',
    age:        28
}

var dario = {
    firstName:  'Dario',
    lastname:   'Rodriguez',
    age:        27
}

function printUppercase({ firstName }) {
    console.log(firstName.toUpperCase());
}

printUppercase(john);
printUppercase(dario);
printUppercase({ firstName: 'Alan'});
