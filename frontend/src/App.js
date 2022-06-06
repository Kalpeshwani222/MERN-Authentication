import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeComponent from "./components/screen/Home/HomeComponent";
import Login from "./components/screen/Login/Login";
import Register from "./components/screen/Register/Register";
import EmailVerify from "./components/screen/EmailVerify/EmailVerify";
import ResetPass from "./components/screen/resetPass/ResetPass";
import NewPassword from "./components/screen/NewPassword/NewPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/home" component={HomeComponent} exact />
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/api/auth/:id/verify/:token" component={EmailVerify} exact />

      {/* reseting the pass */}
      <Route path="/reset" component={ResetPass} exact />

      {/* new Password */}
      <Route path="/new-pass/:id/:token" component={NewPassword} exact />
    
    </BrowserRouter>
  );
};

export default App;
