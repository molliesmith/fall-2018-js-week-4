// {
//     firstname: 'Mollie'
//     lastname: 'Smith'
//     age: 27
// }

// user1.age


// var weddinglist = [
//     'old',
//     'new',
//     'borrowed',
//     'blue',
// ]

// console.log(weddinglist[2]);

// var userlist[
//     user1 user2
// ]

// console.log(userlist[1].firstname);


var addressbook = [{
        firstname: 'Mollie',
        lastname: 'Smith',
        phonenumber: '513-288-7093'

    }, {
        firstname: 'Nelson',
        lastname: 'Smith',
        phonenumber: '513-299-7843'
    }, {
        firstname: 'Laura',
        lastname: 'Wolfram',
        phonenumber: '513-277-6743'
    }, {
        firstname: 'Dennis',
        lastname: 'Smith',
        phonenumber: '513-244-3333'
    }
]

function printFirstName(add) {
    console.log(add)
}

printFirstName(addressbook);

function printAddressBook(add) {
    for (var i = 0; i < add.length; i++) {
        console.log(add[i].addressbook)
    }
}

printAddressBook(addressbook);

var ourFunction = function (thing) {
    for (var i = 0; i < thing.length; i++) {
        console.log(thing[i].lastname);
    };
}

// ourFunction(addressbook);

function ourConsole(message1) {
    return function (message2) {
        console.log('This is our message out. ' + message1);
        console.log('This is our message out. ' + message2);
    }
}

var mgs = ourConsole('Hello');
mgs('Goodbye')

for (var i = 0; i < addressbook.length; i++) {
    mgs(addressbook);
}

function forEach(arr1, func1) {
    for (var i = 0; i < arr1.length; i++) {
        func1(arr1);
    }
}

function printName(x) {
    console.log(x.firstname, x.lastname);
}

function printAddr(x) {
    console.log(x.address);
}

forEach(addressbook,printName);
forEach(addressbook,printAddr);

forEach(addressbook, function(x){
    console.log(x.phonenumber)
});

