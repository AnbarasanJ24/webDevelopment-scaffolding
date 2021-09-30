# Steps to Follow
1. Install both redux and react-redux using npm install redux react-redux --save
2. Folder Structure set up 
3. Create a seperate Reducer and combine it using Combine Reducers in index.js
4. Create an Action Creater with types
5. Wrap App component with Provider and provide store using create store function with reducers input 
6. Map state as props and get action creators functions to pass as props to the component 

# Additional Steps
1. we can add redux thunk by using apply middleware function
2. we have to configure DEV Tools in index.JS using compose function 

# Installing Redux Thunk
1. Install redux thunk using npm install --save redux-thunk
2. setup redux-thunk in index JS by passing thunk inside apply middleware function
3. Create a action creator using redux-thunk which return function