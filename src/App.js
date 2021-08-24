import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Profilescreen from "./screens/Profilescreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      {/* <HomeScreen /> */}

      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profilescreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
