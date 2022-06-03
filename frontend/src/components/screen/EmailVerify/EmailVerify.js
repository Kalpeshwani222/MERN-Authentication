import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link,useParams} from "react-router-dom"
const EmailVerify = () => {

  

  const[validUrl,setValidUrl] = useState(false);

const param = useParams();

  const verifyEmail = async() =>{
      try {
   const url =  `http://localhost:8000/api/auth/${param.id}/verify/${param.token}`;
   const {data}  = await axios.get(url);
   console.log(data);
   setValidUrl(true);          
      } catch (error) {
          console.log(error);
          setValidUrl(false);
      }
  }
  useEffect(() => {
   verifyEmail();
  },[param])
  
  
    return (
    <>
        {
            validUrl  ?(
                <div>
                    <h1>Email verified success</h1>
                    <Link to = "/" >
                        <button className=''>Go to Login</button>
                    </Link>
                </div>
            ):(
               <h1>404 not found</h1>
            )
        }
    </>
  )
}

export default EmailVerify