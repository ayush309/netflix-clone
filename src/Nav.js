import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionnavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionnavbar);
    return () => window.removeEventListener("scroll", transitionnavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>

      {/* <h1>This is navbar</h1> */}
    </div>
  );
}

export default Nav;
