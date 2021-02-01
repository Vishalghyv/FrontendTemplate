import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <div className="progress-bar-v2">
      <section className="header">
        <div className="header-logo">Company Logo</div>
        <div className="header-links">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Help</li>
            <li>Contact</li>
            <li>INIT</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
