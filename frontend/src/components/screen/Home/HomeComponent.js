import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../actions/userActions';
import {useHistory} from "react-router-dom"

const HomeComponent = () => {
const history = useHistory();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };


  return (
      <>          
    <h1>{userInfo.name}</h1>

    <button onClick={logoutHandler} > Logout</button>

      </>
  )
}

export default HomeComponent