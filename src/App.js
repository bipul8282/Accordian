import React, { useState } from "react";

import "./App.css";

export default function App() {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);


  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow(!show)}>
          <div>1. Explain let , var and const in details</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordian-body">
           var = it is global scope/functional scope  variable, we can change  values as well as keys ,
     we can re-declare this variable 
     it is global scope when written out side of the function ,
    and it is a functional scope when declared inside the function .
 let = its is block scope variable , we can't change his key
     but we can change the value of that variable 
 const= its is also block scope variable , we can't change key as well 
      as value of this variable 
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow1(!show1)}>
          <div>2. What is Arrow function ? Explain difference between normal function and arrow function ?
it is introduce in es6</div>
          <div className="sign">{show1 ? '-' : '+'}</div>
        </div>
        {show1 && (
          <div className="accordian-body">
no argumnt is present in arrow function
  arrow function / fat arrow function , it is short length functional syntax than traditional function 
  the main differnce between fat arrow function and normal function is 
  1. legnth of the syntax is shorter than normal function
 2. normal function is using function key word , and fat arrow  function takes the operator
3 .normal function can be use with new key word as we want but arrow function dont't take new key word
4 .  regular functions allow us to use duplicate named parameters. But in strict mode, it is not allowed. 
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow2(!show2)}>
          <div>3. Explain useState hook ?</div>
          <div className="sign">{show2 ? '-' : '+'}</div>
        </div>
        {show2 && (
          <div className="accordian-body">
    
 useState is basically the hook given by the react itself , 
it  give two things 1 is getter function and setter function , it accespts the default value 
we can change the variable with the setter function so is also known as setstate , 
we can use getter function to read the only value to set the value we have to set the 
 value with help of setter function , 
basic syntax is as follow ;-   const[islogin,setIsLogin]=useState(0);   
this is the basic syntax for the usestate
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow3(!show3)}>
          <div>4. Explain props and states .(differentiate them )</div>
          <div className="sign">{show3 ? '-' : '+'}</div>
        </div>
        {show3 && (
          <div className="accordian-body">
         props ;- props is basically the data come from the parent component to child component ,
  props are immutable in nature
 or the data come from the outside of the function , the props are only readable ,
 we cannot change the value , to change the value we have to convert the props in state which is known as 
derived state 
state;- state is basically the data avaiable inside the function itself ,
states are mutable in nature we can change the data of the state
 varibale with help of set state and also read the data with help of getter 
state are managable,  but props has advantage over the state is it has trasnferr the value from 1 fuction 
to other
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow4(!show4)}>
          <div>5. What is react and why react ?</div>
          <div className="sign">{show4 ? '-' : '+'}</div>
        </div>
        {show4 && (
          <div className="accordian-body">
      react is basically the js library which is use to build the ui components which are re usable 
we can re use the component as many times we want in the react , 
react is base on the virtual dom concept   What is meant by virtual DOM?
A virtual DOM is a lightweight JavaScript representation of the Document Object Model 
 used in declarative web frameworks such as React, Vue. js, and Elm.
 Updating the virtual DOM is comparatively faster than updating the actual DOM
          </div>
        )}
      </div>
      <div className="accordian">
        <div className="accordian-header" onClick={()=>setShow5(!show5)}>
          <div>6. What is the way to pass props?

</div>
          <div className="sign">{show5 ? '-' : '+'}</div>
        </div>
        {show5 && (
          <div className="accordian-body">
       ans;- React components use props to communicate with each other. Every parent component can pass some information
 to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any
 JavaScript value through them, including objects, arrays, and functions.
There are 2 ways to do this.:=
1st is from parnt to child which is  known as prop drilling 
2nd is child to parent known as lifting state up
          </div>
        )}
      </div>
    </div>
  );
}

