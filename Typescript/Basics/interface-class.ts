// Interface
// Type can be used for both union and object but interface only work with object 
// In case of Interface, all properties must be used by implementing object or class
// we can make properties readonly or optional in interface
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

// Classes available from ES6
// we cannot use modifier in interface, 

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
