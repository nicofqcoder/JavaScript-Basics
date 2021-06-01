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

function printUppercase(person) {
    // var firstName = person.firstName;
    var { firstName } = person;
    console.log(firstName.toUpperCase());
}

printUppercase(john);
printUppercase(dario);
printUppercase({ firstName: 'Alan'});

function birthday(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

