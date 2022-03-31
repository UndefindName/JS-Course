const student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null,
}

console.log(JSON.stringify(student))

const id = Symbol("id");

const user = {
    sayHi() {
        console.log("Hi");
    },
    [id]: 123,
    something: undefined,
}

console.log(JSON.stringify(user))
/*
const room = {
    number: 23,
    toJSON() {
        return this.number
    }
};

const meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room,    
};

room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy' ? undefined : value)
}, 1))
*/

const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}'

const newMeetup = JSON.parse(str, (key, value) => {
    if (key == "date") return new Date(value)
    return value
})

console.log(newMeetup)

console.log("")

// Задача №1
console.log("Задача №2")

const tUser = {
    name: "Иван Васильевич",
    age: 35,
}

console.log(JSON.parse(JSON.stringify(tUser)))

console.log("");

// Задача №2
console.log("Задача №3")

const room = {
    number: 23,
};

const meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room,    
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {
    console.log(`${key}: ${value}`);
    return ((key != "" && value === meetup) ? undefined : value)
}, 1))