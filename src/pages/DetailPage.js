import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const {id} = useParams()
    const [isLoading,setIsLoading] = useState(true);
    const [post,setPost] = useState ({
        id:null,
        title:null,
        description:null,
        content:null,

    });
    useEffect( () => {
        axios.get(`http://localhost:8080/api/v1/author/detail/by?id=${id}`)
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

        <div className>
            <div className="component" key = {post.id}>
                <p>
                    <h1 style={{fontSize: '2em'}}>{post.title}</h1>

                </p>
                <p>
                    <h2 style={{fontSize: '1.15em'}} >{post.content}</h2>
                </p>
                <p>
                    <h3 style={{fontSize: '1.25em'}}>{post.description}</h3>
                </p>
            </div>
            
        </div>
    )
    }   
export default DetailPage;