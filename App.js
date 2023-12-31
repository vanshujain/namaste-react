import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste react!"),
    React.createElement("h2", {}, "by vanshika jain "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

console.log(heading, parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
