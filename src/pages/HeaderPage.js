import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import HomePage from "./HomePage";


import LoginFormPage from "./LoginFormPage";
import NavBar from "./NavBar";
import PageHeading from "./PageHeading";

const HeaderPage = () => {
  const [currentUser,setCurrentUser] = useState(
    {token : null}
  )
 
  
    return (
      <div>
        
        <NavBar ></NavBar>
        
      </div>    
    )
}

export default HeaderPage;