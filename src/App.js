import logo from './logo.svg';
import { Layout} from 'antd';
import React, { useState } from 'react';
import './App.css';
import PostsPage from './pages/PostsPage';
import HeaderPage from './pages/HeaderPage';
import FooterPage from './pages/FooterPage';
import LoginFormPage from './pages/LoginFormPage';
import HomePage from './pages/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const { Header, Footer, Content } = Layout;
function App() {
  
  return (
  <div>
    <HomePage></HomePage>
  </div>
  );
}

export default App;
