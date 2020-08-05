import React from 'react';
import ReactDOM from 'react-dom';
//import MyApp from './components/MyApp'
import MyInfo from './components/MyInfo'

//JSX= Javascript + XML

// Component
// class HelloWorld extends React.Component{
//   render(){
//     return(
//       <h1>ReactJS Hello World</h1>
//     ) 
//   }
// }

// class HelloWorld1 extends React.Component{
//   render(){
//     return(
//       <h1>ReactJS Demo App</h1>
//     ) 
//   }
// }


//------------------------- Function Components ---------------------

// function HelloWorld1(){
//   return(
//     <h1>ReactJS Function Component</h1>
//   )
// }



// Two parameters
ReactDOM.render( 

  <MyInfo />,
 // <MyApp /> ,
  document.getElementById('root')
);

//ReactDOM.render(what has to be rendered, where to render)

//JSX - Allows to write HTML like syntax which gets transformed to light weight JS objects.

// render(method) - Describes  what the UI will look like for particular component

//ReactDOM.render - Renders a react component to a DOM node.

// Two types of components: a) Function, b) Class 

// React.Component - The way in which you can create a new component

//props - The data which is transferred to the child component from the parent component