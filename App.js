import React from "react";
import ReactDOM from "react-dom/client"; 

/*
    JSX - HTML or XML like syntax but not a HTML in JS.
    JSX is transpiled before it reaches the JS Engine by "PARCEL" which managed by "Babel".
    "Babel" converts JSX to code that Js Engine Understands.
    JSX => React.createElement => reactElement-JS Object => HTML Elemnt(render).
    JSX should be written in "camelCasing".
    For Multiples lines wrap it in a round bracket.
*/

// React Element
const JsxHeading = (
<h1 className="head" tabIndex="5">
    Namaste React using JSX</h1>
);

// React Component
// Class Based Components - OLD

/*  React Functional Component - NEW
    The component name should be "Capital"
*/
const HeadingComponent = () => {
     
    return <h1 className="heading">Namaste React Functional Component</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JsxHeading);
