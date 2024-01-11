import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css"; // Import Tailwind CSS styles
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
