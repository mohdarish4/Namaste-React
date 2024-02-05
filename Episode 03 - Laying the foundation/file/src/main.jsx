import React from 'react'
import ReactDOM from 'react-dom/client'

// const perent =React.createElement("div", 
// {id: "perent"},
// React.createElement("div", 
// {id:"child"},
// [React.createElement("h1", {} , "Hi my name is h1" ),
// React.createElement("h2", {} , "Hi my name is h2" )
// ])
// );
// const heading = React.createElement('h1', {} , "hello world with the help of react");

// console.log(perent); //object


                   //jsx

// This is a react element.
// JSX(it is transpile before reach JS) - Vite -Babel
//  JSX => Babel is trnspile it in  React element => React Obj. => HTMLElement
const heading = <h1>Hi this is namaste react code.</h1>
const Title = () => (
   <h1> This is a foctional component and it's execute in Heading function. </h1>
);

// This is a functional component
const Heading = () =>{
return (
  <>
  {heading}
  {/* If any fuction written to another fun. is call "Component Composition" Exmaple: Title fuction written in Heading Function */}
  <Title/>
   <h1>Hi, this is functional component and it's return JSX piece of code. </h1>
 </>
)};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);
