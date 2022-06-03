import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userActions";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

console.log(userInfo);
  
  const submitHandler = async (e) => {
    e.preventDefault();
   dispatch(register(name, email, password));
  console.log("click");
  };

  return (
    <section className="">

    {error && <h3>{error}</h3>}
    {userInfo && <h4>{userInfo.message}</h4>}
      <div className="mt-5 p-5">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
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
        </form>
      </div>
    </section>
  );
};

export default Register;
