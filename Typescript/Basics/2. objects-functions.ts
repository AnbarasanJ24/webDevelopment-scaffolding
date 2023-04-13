// We can mention type to the object using type keyword 
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'Anbarasan'
}

// Type Assertion : we can change one type to another type
let id1: any = 1;
let userId = id1 as string;
userId = 'user-1';


// functions
let sum = (a: number, b: number): number => a + b;

type Message = string | number;
let log = (message: Message): void => console.log(message);

