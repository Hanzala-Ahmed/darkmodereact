import "./App.css";
import { FaSun, FaMoon, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useState } from "react";
import bulbOff from "./Images/bulbOff.png";
import bulbOn from "./Images/bulbOn.png";
function App() {
  const [isToggle, setIsToggle] = useState(true);
  const toggle = () => {
    setIsToggle(!isToggle);
  };
  const [isBulbOff, setIsBulbOff] = useState(true);
  const changeImage = () => {
    setIsBulbOff(!isBulbOff)
  }
  return (
    <div className="App">
      <section className={isToggle ? "navbarMainDark" : "navbarMainLight"}>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="navlinks">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Feedback</li>
            <li>About</li>
          </ul>
        </div>
        <div className="toggleBtn">
          <span onClick={() => toggle()}>
            {isToggle ? (
              <FaMoon className="toggleOff btn" />
            ) : (
              <FaSun className="btn" />
            )}
          </span>
        </div>
      </section>
      <div className="changeImageSec">
        <div className="img">
          <img src={isBulbOff ? bulbOff : bulbOn} className="bulbImg" alt="" />
        </div>
        <div className="imgBtns">
          <span>On</span>
          <span  onClick={() => changeImage()}>
            {isBulbOff ? (
              <FaToggleOff className="toggleBtn btn"/>
            ) : (
              <FaToggleOn className="toggleBtn btn"/>
            )
            }
          </span>
          <span>Off</span>
        </div>
      </div>
    </div>
  );
}

export default App;
