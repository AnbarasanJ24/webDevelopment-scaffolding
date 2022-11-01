What is Typescript?
    1. Its a open source language, which give more features such as strong typing, editor checks, auto complete, OOP, Generics and Decorators to JS
    2. Atlast it complies the code down to JS, inclused
    3. Used in both front end and back end (Node JS)

    Pros: More robust, Spot error easily, readbility
    Cons: More code, Required compilation

Dynamic Vs Static 
    1. Dynamic - Types associated with the varibale or function will be identified during run time. (JS,Python,Ruby,PHP)
    2. Static - During initialization we can assign types to varibales, function paramter and return values. (Java,Go)

Code Setup
    1. Install typescript complier using npm i -g typescript
    2. create a index.ts and complie it (ES5) using tsc index or tsc
    3. we can watch the file using tsc --watch index  or tsc --watch
    4. To create config file use tsc -init

Integrate Typescript in React 
    1. create a project using npx create-react-app . --template typescript

Integrate Typescript in Node & Express
    1. Install required dependencies npm i -D typescript ts-node @types/node @types/express
    2. On running tsc inside src will take ts file and complie into JS file
    3. we can initialize ts config using tsc --init and also modify output, root direcectory and module resolution
    {
        "outDir" : './dist',
        "rootDir" : './src',
        "moduleResultion: : 'node'
    }
    4. Add below commands in packege.json file
    {
        "start" : "node dist/app.js",
        "dev": "nodemon src/app.ts",
        "build" :"tsc -p ."
    }