/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {Link,Route,useNavigate} from "react-router-dom"
import Signin from "../pages/Signin"


const SignupContent = () => {
  const[userName,setUserName]=useState("")
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('/signin');
    // Perform any necessary validation or submission logic here
  
    // After validation or submission, navigate to the "/signin" route
    
  }; 
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="font-extrabold text-3xl">Create an Account</div>
          <div className="font-extralight text-xl">
            Already Have An Account? <Link className="pl-2  underline" to={"/signin"}>Login</Link>
          </div>
          <LabelledInput name="UserName" placeholder="enter your Username" type="text" onChange={(e)=>{
            setUserName(e.target.value)
          }}></LabelledInput>
          <LabelledInput name="Email" placeholder="enter your Email" type="email" onChange={(e)=>{
            console.log(e);
            setEmail(e.target.value)
          }}></LabelledInput>
          <LabelledInput name="Password" type="password" placeholder="enter the password" onChange={(e)=>{
            setPassword(e.target.value)
          }}></LabelledInput>
          <button onClick ={handleClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-3">Submit</button>
        </div>
        {userName}
        {password}
        {email}
      </div>
    </div>
  );
};


function LabelledInput({name,placeholder,type,onChange})
{
 return (<>
 <div>
            <label htmlFor="{name}" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black my-2">{name}</label>
            <input type={type} id="{name}" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>

 </>)
}
export default SignupContent;
