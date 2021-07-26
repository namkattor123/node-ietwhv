import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useState } from "react";
import HomePage from './HomePage';
import PostsPage from './PostsPage';
const LoginFormPage = ({setCurrentUser}) => {
  
    
    const initialValues = { username:'', password:''};
    const [loginSuccess, setLoginSuccess] = useState(false);
    const validateValues = values => {
      const errors = {};
      if(!values.username){
        errors.username = 'Required username';
      }else if (values.username.length > 5) {
        errors.username = "*Password must be lower 5 characters long.";
      }
      if(!values.password){
        errors.password = 'Required password';
      }else if (values.password.length < 8) {
        errors.password = "*Password must be 8 characters long.";
      }
    }
    const onSubmit = (values, { setSubmitting }) => {
      axios.post('http://localhost:8080/authenticate',{
        username: values.username,
        password: values.password
      })
      .then( response => {
        setLoginSuccess(true)
            setCurrentUser({
                token: response.data.jwttoken
            });
        
      }).catch(error => {
        console.error();
      });
    }
    if(loginSuccess){
      return <PostsPage/>
    }
    return (
      <div className="container">
     <h1>Login !</h1>
     <Formik
       initialValues={initialValues}
       validate={validateValues}
       onSubmit={onSubmit}
     >
      {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         
       }) => (
        <form onSubmit={handleSubmit}>
           <input
            style ={{margin : 15, display : 'block'}}
             type="username"
             name="username"
             placeholder = "username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
        {errors.username && touched.username && errors.username}
        
           <input
             type="password"
             name="password"
             style ={{margin : 15, display : 'block'}}
             placeholder =" password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button  style={{margin : 15, display: "block" }} type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
   </div>
    );
};

export default LoginFormPage;