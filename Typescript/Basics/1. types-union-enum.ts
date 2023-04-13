/* ================================================================================================== */

// Basic Types [boolean, number, string, bigint, any, unknown]
let username: string = 'Anbu';

// We can save interger, float, negative values and also expression returns number
let age: number = 25;
age = 25.00;
age = -25.00;
age = Infinity * 0.1;
age = parseInt('25');


// We can assign boolean values or expression return boolean values
// Since null and undefined are not falsy, we can assign this value to boolean
// isEmployed = null; isEmployed = undefined; [We should not assign] 
let isEmployed: boolean = true;
let employeeStatus: boolean = isEmployed === true;

// JS will take max 2^53 as number, which we can represent using Number.MAX_SAFE_INTEGER
// Adding any value to this will written same safe value
// If we want a number greater than this , we can go with bigint. Bigint cannot have decimal values 
// Math methods will not work with Bigints, apart from this everything works with numbers 

// Below both are compatiable with Es2020
// let bigNum:bigint = BigInt(123456);
// let bigNum1:bigint = 12345n;



// We should not use any, because it can accept any data type to be stored on the variable 
// writing with any is more like writing code in JS 
let city: any = 'Pondicherry';


// Unknown will not allows us to move further, but any will not show any error 
// It will be useful when we dont know the value when start coding but later sometime we should change it
function multiple(number: unknown) {
    if (typeof number === 'number') {
        return number * 2;
    }
    return "Error";
}


/* ================================================================================================== */

// In place of number we can use any above types
// Which means each value inside array should be number  
let arr: number[] = [1, 2, 3];
let employeDetails: any[] = ['Anbu', 25, 'Pondicherry']


/* ================================================================================================== */

// Type => Exact type in order
// In case of concern about type order, we can use Tuple 
let employeDetails1: [string, number, string] = ['Anbu', 25, 'Pondicherry'];
let employeeAddress: [string, string][] = [['Anbu', 'Pondicheery'], ['Ram', 'Bangalore']]

/* ================================================================================================== */

// In case of variable take more types use Union
let id: string | number;
id = 'user-1';
id = 1

/* ================================================================================================== */

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

/* ================================================================================================== */
