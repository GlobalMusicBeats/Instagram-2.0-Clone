import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Feed from "./components/Feed";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SignIn from "./components/SignIn";
import { RecoilRoot } from "recoil";
import Modal from "./components/Modal";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [{ user }, dispath] = useStateValue();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {!user ? (
        <SignIn />
      ) : (
        <div>
          <Router>
            <Switch>
              <Route path="/">
                <RecoilRoot>
                  <Header />
                  <Feed />
                  <Modal />
                </RecoilRoot>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
