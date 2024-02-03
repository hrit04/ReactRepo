
import React from "react";
import ReactDom from "react-dom/client";
// <div id="parent">
// <div id="child">
//     <h1>
//         "I am h1 tag"
//     </h1>
//       <h1>
//         "I am h1 tag"
//     </h1>
// </div>
// </div>

// make the above structure in react

const parent = React.createElement("div", { "id": "parent" }, [
    React.createElement("div",
        { "id": "child" },
        [React.createElement("h1", {}, "React rock"),React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
    React.createElement("div",
        { "id": "child2" },
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
]);









let heading = React.createElement("h1", {
    "id": "heading", "xyz": "abc"
}, "Hello World from React")

console.log(parent); // it will return a javascript object
let root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);
