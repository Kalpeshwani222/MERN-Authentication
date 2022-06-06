import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const param = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!password) {
      return alert("password is req");
    }

      try {
      const config = {
        Headers: {
          "Content-type": "applications/json",
        },
      };

      const { data } = await axios.post(
        `/api/reset/${param.id}/${param.token}`,
        {
          password,
        },
        config
      );

    //   console.log(data.message);
     setSuccess(data.message);
      setError("");

    } catch (error) {
        // console.log(error.response.data.message);
         setError(error.response.data.message);
    }
  };

  return (
    <>
      <section className="">
       {error && <span className="danger">{error}</span>}
          {success && <span className="danger">{success}</span>}
        <div className="mt-5 p-5">
          <form onSubmit={submitHandler}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <br />
            <button type="submit">Change Pass</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewPassword;
