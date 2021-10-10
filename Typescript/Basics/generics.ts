// Generics - Used for reuseable component by passing dynamic type
// Here getArray can give both number and string array 

const getArr = <T>(items: T[]): T[] => {
    return new Array().concat(items);
}

const numArr = getArr<number>([1, 2, 3, 4, 5]);
const strArr = getArr<string>(['a', 'b', 'c', 'd']);