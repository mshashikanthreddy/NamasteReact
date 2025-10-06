import React from "react";
import ReactDOM from "react-dom/client"; 

const elem = <span>React Element</span>

const Title = () => (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX
    </h1>
);  

// Component Composition => Using component inside another component.
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>    
);

// <Title /> and <Title></Title> both are same.
// we can also write as {Title()} as it is a normal Javascript function.

/* If we want to use "React Element" inside a "React component" we just
have to write in "{title}" curly brackets. we can write any "JS" inside it. */ 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

/*Here we can use React Component inside React Element
React Component inside React Component
React Element inside React Element.
"It follows synchoronous way of execution so, we cannot use an 
element or an component before it intialized."*/
