import React from "react";
import logo from "./img/logo192.png";

function App() {
  return (
    <main className="layout">
      <nav className="side-nav">
        {/* <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul> */}
      </nav>
      <header className="header">
        <div className="container">
          <h1 className="font-comic-neue font-bold title-indent font-lg">
            <span className="font-xl">
              <span className="animate-random-color">C</span>
              <span className="animate-random-color">S</span>
              <span className="animate-random-color">S</span>
            </span>{" "}
            is <br />
            <em>awesome!</em>
          </h1>
          <img
            src={logo}
            className="intro animate-intro"
            alt="A shocked monkey puppet."
          />
        </div>
      </header>
    </main>
  );
}

export default App;
