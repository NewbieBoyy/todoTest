import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoForm from "./TodoForm";
import reportWebVitals from "./reportWebVitals";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
