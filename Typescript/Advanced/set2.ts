// Set2 - Exclude, Extract,NonNullable,Return Type and Instance Type

// Exclude <T,V>, it will take generic type and exclude value and return excluded value result
// It will avoid value from Parent
type AvailableDrinks = 'Coffee' | 'Tea';
let Ram: AvailableDrinks = 'Coffee';


type drinksRaviExclude = 'Tea';
let ravi: Exclude<AvailableDrinks, drinksRaviExclude> = 'Coffee'

// Extract<T,V>, it will extract value from parent type and return matched value
// It will grab value from parent 
type DrinksRaviLikes = 'Coffee' | 'Black Tea';
let ravi1: Extract<AvailableDrinks, DrinksRaviLikes> = 'Coffee';



// NonNullable <T> - It will remove falsy type value from the generic

type values = string | string[] | null | undefined;
let userName: NonNullable<values> = 'Anbu';

// Since TS allow undefined or null value by default, we need to add 
// strictNullCheck : true in tsconfig complier options (optional is strict : true already exists)
interface shipProperties {
    colors?: 'red' | 'blue';
}
function paintShip(id: number, colors: NonNullable<shipProperties['colors']>) {
    return {
        id, colors
    }
}
paintShip(1, 'red')

// ReturnType<typeof functionName> - It will capture return type of mentioned function

type paithShopreturn = ReturnType<typeof paintShip>;

// InstanceType <typeof class> - It will capture instance type of the class

