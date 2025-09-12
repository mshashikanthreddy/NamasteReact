const parent  = React.createElement(
    "div",
    {id : "parent"},
    React.createElement("div",{id : "child"},[
        [React.createElement("h1", {id : "heading1"} , "This is an h1 Tag"),
         React.createElement("h2", {id : "heading2"} , "This is an h2 Tag")
        ],
        [React.createElement("h1", {id : "heading1"} , "This is an h1 Tag"),
         React.createElement("h2", {id : "heading2"} , "This is an h2 Tag")
        ]
    ]));

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    console.log(parent);

    // React object converts to HTMl which browser understands
    // order of execution of code is important
    // React renders only the object which we asked to render

// const heading = React.createElement(
//     "h1",
//     {id : "heading1"},
//     "Hello World From React"); 
//     /* Here it creates an Js object which consists of h1 tag,attributes as an object,
//     children or multiple children as arrays which are inside props */

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);