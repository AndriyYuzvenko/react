import {homework} from './interfaces/homework6_interfaces'

const user: homework = {
    name: "Max",
    age: 18,
    gender: 'male'
}

const sum = (a: number, b: number): number => {
    return a + b
}
const showSum = (a: number, b: number) => {
    console.log(a + b);
}

const incAge = (someUser, inc: number): number => {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge(user, 2));