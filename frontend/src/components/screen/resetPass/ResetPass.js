import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "Content-type": "applications/json",
        },
      };

      const { data } = await axios.post(
        "/api/reset/reset-password",
        {
          email,
        },
        config
      );

      setSuccess(data.message);
      setError("");
      //false
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="mt-5 p-5">
          {error && <span className="danger">{error}</span>}
          {success && <span className="danger">{success}</span>}
          <form onSubmit={submitHandler}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

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

export default ResetPass;
