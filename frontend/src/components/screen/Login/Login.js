import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";
import { useHistory, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <section className="login-section">
        <div className="mt-5 p-5">
          {error && <span className="danger">{error}</span>}
          <form onSubmit={submitHandler}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
            <button type="submit">Submit</button>
            <br />
            <Link to="/register">{"Don't have an account? Sign Up"}</Link>
            <br />
            <Link to="/reset">{"Don't remember password?Forgot it"}</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
