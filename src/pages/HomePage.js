import React, { useState } from 'react';
import FooterPage from './FooterPage';
import HeaderPage from './HeaderPage';
import PostsPage from './PostsPage';
const HomePage = () => {
    
    return (
    <div>
    <HeaderPage/>
    
    <footer className="appfooter">
        <FooterPage></FooterPage>
    </footer>
    </div>
    )
}
export default HomePage;