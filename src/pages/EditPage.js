import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const EditPage = ({currentUser}) => {
        
        const {id} = useParams()
        const [isLoading,setIsLoading] = useState(true);
        const [post,setPost] = useState ({
            id:null,
            title:null,
            description:null,
            content:null,
    
        });
        useEffect( () => {
            axios.get(`http://localhost:8080/api/v1/author/detail/by?id=${id}`,{
                headers:{
                    "Authorization" : currentUser.token
                }
            })
            .then(response => {
                console.log(response.data);
                setIsLoading(false);
                setPost({
                    id: response.data.id,
                    title : response.data.title,
                    description: response.data.description,
                    content: response.data.content
                })
            })
        },[]);
        if(isLoading) {
            return <h1>Loading</h1>
        
        }
        return (
                
            
                <div className="component" key = {post.id}>
                    <h1>Loading</h1>
	                <input type='text'  value={post.title}/><br/>
	                < input type='text' name='newDescription' value={post.description}/><br/>
                    <input type = 'text' value={post.content} ></input>
	                <input type='hidden' name='id' value={post.id}/>
	                <input type='submit' value='UPDATE'/>
                
                </div>
                
           
        )
    
}
export default EditPage;