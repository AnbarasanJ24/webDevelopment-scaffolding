What is Typescript?
    1. Its a open source language, which give more features including static typing to JS
    2. Atlast it complies the code down to JS, inclused
    3. Used in both front end and back end (Node JS)

    Pros: More robust, Spot error easily, readbility
    Cons: More code, Required compilation

Dynamic Vs Static 
    1. Dynamic - Types associated with the varibale or function will be identified during run time. (JS,Python,Ruby,PHP)
    2. Static - During initialization we can assign types to varibales, function paramter and return values. (Java,Go)

Code Setup
    1. Install typescript complier using npm -g typescript
    2. create a index.ts and complie it (ES5) using tsc index or tsc
    3. we can watch teh file using tsc --watch index  or tsc --watch
    4. To create config file use tsc -init

Integarate Typescript in React 
    1. create a project using npx create-react-app . --template typescript