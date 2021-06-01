var tony = {
    firstName:  'Anthony',
    lastname:   'Stark',
    age:        37,
    engineer:   true,
    cook:       true,
    singer:     false,
    dj:         true,
    guitarist:  false,
    smart:      true
}

function printProfessions(person) {
    console.log(`${person.firstName} is:`)
    
    if (person.engineer) {
        console.log('Engineer')
    }

    if (person.cook) {
        console.log('Cook')
    }

    if (person.singer) {
        console.log('Singer')
    }

    if (person.guitarist) {
        console.log('Guitarist')
    }

    if (person.smart) {
        console.log('Super smart')
    }
}

printProfessions(tony);
