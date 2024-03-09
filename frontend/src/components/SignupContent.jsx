import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SignupContent = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  const [isSignIn, setIsSignIn] = useState(true); 

  // Update isSignIn state based on the current location
  useEffect(() => {
    if (location.pathname === "/signup") {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  }, [location.pathname]); // Dependency array ensures the effect runs when location.pathname changes
  const handleClick = () => {
    // Perform any necessary validation or submission logic here
    alert(isSignIn);
    
    // Update the state based on the current value
      isSignIn?setIsSignIn(false):setIsSignIn(true);
   
    // Navigate the user based on the updated state
    if (isSignIn) {
      navigate('/blog/:id');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="font-extrabold text-3xl">Create an Account</div>

          <div className="font-extralight text-xl">
            {isSignIn ? (
              <>Don't have an account? <Link className="pl-2  underline" to={"/signup"}>Signup</Link></>
             
            ) : (
              <>Already Have An Account? <Link className="pl-2  underline" to={"/signin"}>Login</Link></>
            )}
          </div>
          
          <LabelledInput name="UserName" placeholder="enter your Username" type="text" onChange={(e) => setUserName(e.target.value)} />
          {isSignIn?"":(<><LabelledInput name="Email" placeholder="enter your Email" type="email" onChange={(e) => setEmail(e.target.value)} /></>)}
          
          <LabelledInput name="Password" type="password" placeholder="enter the password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 my-3">{isSignIn?"SignIn":"SignUp"}</button>
        </div>
        {userName}
        {password}
        {email}
      </div>
    </div>
  );
};

function LabelledInput({ name, placeholder, type, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-black my-2">{name}</label>
      <input type={type} id={name} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
  );
}

export default SignupContent;