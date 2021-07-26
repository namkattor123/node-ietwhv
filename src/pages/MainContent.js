import PostsPage from "./PostsPage"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import PageHeading from "./PageHeading";
const MainContent = () => {
    return(
        <div className="switch-bar">
            <Switch>
                <Route path="/home">
                          
                    <div className="clearfix"></div>
                    <PageHeading heading = {"Ocean Nguyen"} ></PageHeading>
                    <PostsPage></PostsPage>       
                </Route>
                <Route path="/about">
                    <div className="clearfix"></div>
                    <PageHeading heading = {"About Us"} ></PageHeading>   
                </Route>
                <Route path="/contact">
                    <div className="clearfix"></div>
                    <PageHeading heading = {"Contact Us"} ></PageHeading>
                          
                </Route>
                <Route path="/logout">
                            
                </Route>
			
            </Switch>
        </div>
    )
}
export default MainContent;