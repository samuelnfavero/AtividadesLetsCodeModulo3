class Person{

    constructor({firstName, lastName, age, gender, interests}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.insterests = interests;
    }

    bio = () => console.log(`${this.firstName} ${this.lastName} is ${this.age} years old. He/She like ${this.interests}`)

    greeting = () => console.log(`Hi, I'm ${this.firstName}`)
}

class Teacher extends Person{

    constructor({firstName, lastName, age, gender, interests, subject}){
        super({firstName, lastName, age, gender, interests});
        this.subject = subject;

    }
    greeting= () => console.log(`Hello. My name is ${this.firstName} ${this.lastName}, and I teach ${this.subject}`)
}

class Student extends Person{

    greeting = () => console.log(`Yo! I'm ${this.firstName}`)
}

const p1= new Person({
    firstName: 'Paula',
    lastName: 'Fávero',
    age:21,
    gender:'F',
    interests:'dogs',
})

const t1= new Teacher({
    firstName: 'Samuel',
    lastName: 'Fávero',
    age:25,
    gender:'M',
    interests:'books',
    subject:'math'
})

const s1= new Student({
    firstName: 'Júlia',
    lastName: 'Fávero',
    age:22,
    gender:'F',
    interests:'architecture',
})