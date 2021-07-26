import { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import PageHeading from "./PageHeading";
import PostsPage from "./PostsPage";
import Searchbar from "./SearchBar";
import DetailPage from "./DetailPage";
import LoginFormPage from "./LoginFormPage";
import EditPage from "./EditPage";
const NavBar = () => {
  const [currentUser, setCurrentUser] = useState({
    token: null
  });
    return (
        <div>
            <Router>
            <header className="masthead">
              <div className="overlay">
              </div>
              <div className="navbar">
              <div className="container">
                  <a className="navbar-brand" href="#"><img src="logo.png"/></a>
                  <div className="navbar-collapse" style={{float: 'right'}}>
                      <div id = "nav-bar">
                      
                        <div>
                          <nav className = "nav-bar">
                            <ul style = {{display : 'flex'}}>
                              <li>
                                <Link to="/home"  style={{ 
                                        textDecoration: 'none',
                                        color:'white'
                                }}>Home</Link>
                              </li>
                              <li>
                                <Link to="/about" style={{ 
                                        textDecoration: 'none',
                                        color:'white'
                                }}>About</Link>
                              </li>
                              <li>
                                <Link to="/login" style={{ 
                                        textDecoration: 'none',
                                        color:'white'
                                }}>login</Link>
                              </li>
                              <li>
                                <Link to="/logout" style={{ 
                                        textDecoration: 'none',
                                        color:'white'
                                }}>Logout</Link>
                              </li>
                            </ul>
                          </nav>
                          <Searchbar></Searchbar>
                          
                        </div>
                      
                      </div>
                      
                  </div>
              </div>
              </div>
              <div className="clearfix"></div>
              <PageHeading heading = {"Ocean Nguyen"} ></PageHeading>
            </header>
            <main className="appcontent">
              <Switch>
                            <Route path="/home">
                            
                            <div className="clearfix"></div>
                              
                              
                                <PostsPage></PostsPage>
                                                      </Route>
                            <Route path="/about">
                            <div className="clearfix"></div>
                              <AboutUs></AboutUs>
                            </Route>
                            <Route path="/login"
                              render = { () => {
                                if(currentUser.token !== null) {
                                    console.log(currentUser.token)
                                    return (
                                        <PostsPage/>
                                    )
                                }
                                else return (
                                  console.log(currentUser.token),
                                  <LoginFormPage setCurrentUser = {setCurrentUser}></LoginFormPage>)
                            }}>
                                
                            
                            
                            </Route>
                            <Route path="/logout"
                            render = { () => {
                                  if (currentUser.token == null) {
                                      console.log(currentUser.token)
                                      return <PostsPage/>
                                  } else {
                                    console.log(currentUser.token)
                                      setCurrentUser({
                                        token:null
                                      })
                                      return <PostsPage/>
                                  }
                              }}>
                              
                            </Route>
                            <Route path="/detail/:id">
                              <DetailPage></DetailPage>
                            </Route>    
                            <Route path="/edit/:id"
                              render = { () => {
                                if (currentUser.token == null) {
                                    console.log(currentUser.token)
                                    return <LoginFormPage setCurrentUser = {setCurrentUser}></LoginFormPage>
                                } else {
                                  
                                  return <EditPage currentUser = {currentUser} ></EditPage>
                                }
                            }}
                            >
                              
                            </Route>
              </Switch>
              <div class="listall">
                <Link to = "/home" >    <button className = "edit-button" ><span> VIEW ALL</span></button> </Link>
              </div>
            </main>
          </Router>
            
        </div>
    );
}

export default NavBar;

