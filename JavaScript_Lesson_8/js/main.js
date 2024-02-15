// 1
let person = {
    name: 'Григорий',
    age: 37,
    city: 'Москва'
    };
    // 2
    person.sayHello = function(name) {
    return "Hello " + name;
    };
    console.log(person.sayHello('Григорий')); 

// 3
const users = [
    {
        name: 'Мария',
        age: 33,
        isAdmin: true
    },
    {
        name: 'Иван',
        age: 23,
        isAdmin: false
    },
    {
        name: 'Павел',
        age: 23,
        isAdmin: false
    }];

let simpleUsersCount = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        simpleUsersCount++;
    }
}
console.log(simpleUsersCount);