// Type => We can mention type to the object using type keyword 
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'Anbarasan'
}

/* ================================================================================================== */


// Type Assertion => we can change one type to another type
let id1: any = 1;
let userId = id1 as string;
let userId1 = <number>id1;
userId = 'user-1';


/* ================================================================================================== */


// Typing for Functions
let sum = (a: number, b: number): number => a + b;

let sum1 = (a: number, b: number): number => {
    return a + b;
}

type Message = string | number;
let log = (message: Message): void => console.log(message);

/* ================================================================================================== */


/*
Interface
Type can be used for primitives, union and object but interface only work with object 
In case of Interface, all properties must be used by implementing object or class
we can make properties readonly or optional in interface
*/
interface UserInterface {
    id: number,
    name: string,
    readonly age?: number
}

let user1: UserInterface = {
    id: 1,
    name: 'Anbu'
}

// Interface with function
interface sum {
    (a: number, b: number): number
}

let total: sum = (a: number, b: number): number => a + b;


/* ================================================================================================== */


// Classes available from ES6 - Used to Create Objects 
// we cannot use modifier in interface 
class Person {
    private id: number;
    private name: string;
    protected address: string;
}

interface PersonInterface {
    id: number;
    name: string;
    register(): string;
}
class User1 implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register(): string {
        return `${this.name} is a registered user now!`
    }
}

let anbu = new User1(1, 'Anbu');

/* ================================================================================================== */


// Extending the class
class Product {
    price: number;
    description: string;

    constructor(price: number, description: string) {
        this.price = price;
        this.description = description;
    }
}

class SuperProduct extends Product {
    discount: number;

    constructor(price: number, description: string, discount: number) {
        super(price, description);
        this.discount = discount;
    }
}

class Apple extends SuperProduct {
    constructor(price: number, description: string, discount: number) {
        super(price, description, discount);
    }
}

const red = new Apple(100, 'Red Apple from kashmir', 10);


/* ================================================================================================== */


// Generics - Used for reuseable component by passing dynamic type
// Here getArray can give both number and string array 

const getArr = <T>(items: T[]): T[] => {
    return new Array().concat(items);
}

const numArr = getArr<number>([1, 2, 3, 4, 5]);
const strArr = getArr<string>(['a', 'b', 'c', 'd']);


/* ================================================================================================== */
