# NgRx -> Angular + Redux

1. why NgRx
    Passing data to multiple component
    Persisting data on screen refresh 
    Mainatining data in uniform way 
    No need of service Layer
    Better tooling

2. When we should not use NgRx
    Team is new to Angular
    Application is simple
    Already having good pattern for passing data 

3. Redux Data flow
    View -> Action creator return Action-> DIsptach Action -> Manipulate data in reducer-> 
    update new data in store -> Pass new data to selector -> subcribe new data in component using selector

4. Redux Principle
    Data should be at singel place
    State should be read only, it will be changed only by dispatching action
    State change will be handled only by pure function 