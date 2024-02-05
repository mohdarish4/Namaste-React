import React from 'react'
import ReactDOM from 'react-dom/client'

const perent =React.createElement("div", 
{id: "perent"},
React.createElement("div", 
{id:"child"},
[React.createElement("h1", {} , "Hi my name is h1" ),
React.createElement("h2", {} , "Hi my name is h2" )
])
);
// const heading = React.createElement('h1', {} , "hello world with the help of react");

console.log(perent); //object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(perent);