import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./auth.css";

// ✅ Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ Bootstrap JS (for toggling navbar, dropdowns, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
