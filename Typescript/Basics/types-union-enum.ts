// Basic Types

let username: string = 'Anbu';
let age: number = 25;
let isEmployed: boolean = true;
let city: any = 'Pondicherry'



// In place of number we can use any above types
// Which means each value inside array should be number  
let arr: number[] = [1, 2, 3];
let employeDetails: any[] = ['Anbu', 25, 'Pondicherry']


// In case of concern about type order, we can use Tuple 
let employeDetails1: [string, number, string] = ['Anbu', 25, 'Pondicherry'];

let employeeAddress: [string, string][] = [
    ['Anbu', 'Pondicheery'],
    ['Ram', 'Bangalore']
]


// In case of variable take more types use Union
let id: string | number;
id = 'user-1';
id = 1

// In case of named constant use Enum
// By default it starts with 0, we can modify it
enum Direction1 {
    UP,
    LEFT,
    DOWN,
    RIGHT
}

enum Direction2 {
    UP = 'up',
    LEFT = 'left',
    DOWN = 'down',
    RIGHT = 'right'
}
