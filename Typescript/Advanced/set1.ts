// Set1 - Partials, Required, Read onplay, Record, Pick, Omit


// Partials <T> - It will take Generic Type and make all properties as optional
interface UserInterface {
    id: number;
    name: string;
}

const updateUser = (age: number, user: Partial<UserInterface>) => { };

// Since User type should implement both id, name 
// But requirement is to update only id, in that case will use partails 
updateUser(25, {
    id: 1
})

// Required<T> - It will take generic type and make all optional properties as required
interface UserInterface1 {
    id?: number;
    name?: string;
}
const updateUser1 = (age: number, user: Required<UserInterface1>) => { };
updateUser1(25, {
    id: 1,
    name: 'Anbu'
})

// ReadOnly<T>- It will take generic type and make all properties ready only


// Record<K,T>- we can create a each record in object with defined key and value type
const User: Record<string, string> = {
    age: '1',
    name: 'Anbu'
}

// Pick <T,K> - we can pick particular key in the generic type (K takes union value-> 'x1' | 'X2')
// In user Interface Pick only id and make a new type out of it
const updateUser2 = (age: number, user: Pick<UserInterface, 'id'>) => { };

updateUser2(25, {
    id: 1,
})

// Omit<T,K> - It is opposite to Pick, 
// it will ignore mentioned key and create new type(K takes union value-> 'x1' | 'X2')
const updateUser3 = (age: number, user: Omit<UserInterface, 'id'>) => { };
updateUser3(25, {
    name: 'Anbarasan'
})

// All this utility types which result will also be stored as type 
type withoutId = Omit<UserInterface, 'id'>
type withoutname = Pick<UserInterface, 'id'>