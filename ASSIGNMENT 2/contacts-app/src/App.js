import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000);
  }, []);

  return (
    <div className="wrapper">
      {showSpinner && (
        <div className="spinner">
          <img
            src={require("./components/assets/spinner-2.gif")}
            alt="Loading"
          />
        </div>
      )}
      <div
        className="user-container"
        style={{ display: showSpinner ? "none" : "block" }}
      >
        {!showSpinner && (
          <div>
            <Header />
            <Main />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
