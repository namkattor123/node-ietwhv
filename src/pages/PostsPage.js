import axios from "axios";
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams
  } from "react-router-dom";
import DetailPage from "./DetailPage";
import EditPage from "./EditPage";
import HeaderPage from "./HeaderPage";
import HomePage from "./HomePage";
import LoginFormPage from "./LoginFormPage";


const PostsPage = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [post,setPost] = useState ({
        id:null,
        title:null,
        description:null,

    });
    const [posts,setPosts] = useState([]);
    const [searchTerm,setSearchTerm] = useState();
    const hello = () => {
        return(
            alert("Hello")
        )
    }
   
    useEffect( () => {
        axios.get('http://localhost:8080/api/v1/author/home')
        .then(response => {
            setIsLoading(false);
            setPosts(response.data);
        })
    },[]);

    //const postsFilter = posts.filter(post => post.title.includes(searchTerm));
    if(isLoading) return <h1>Loading</h1>
    return (
        
        <div className = "postpage">
            
            <ul className="listcontent">
                
                <div className = "post" key = {post.id} >

                    { posts.map( post => (
                        <li class="post">
                        <div class="title" >
                            <h1>{post.title}</h1>
                            <a class='delete' href="#"><i class="fas fa-trash-alt w3-xlarge"></i></a>
                            <h3 class="description">{post.description}</h3>
                        </div>
                                
                        <p class="post-info">Posted by Ocean Nguyen on May 20,2019 - 8 mins read</p>
                        <Link to={{pathname: `/edit/${post.id}`}}>  <button className = "edit-button" ><span>Edit</span></button></Link>
                        <Link to={{pathname: `/detail/${post.id}`}} >  <button className = "edit-button" ><span> Details </span></button></Link>
                        <br />
                        <hr />
                        </li>
                    )
                        
                    )}
                    
                </div>
                
            </ul>
            
            
            
        </div>
    );
};

export default PostsPage;