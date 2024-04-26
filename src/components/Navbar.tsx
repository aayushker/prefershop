// import '@/customCSS/main.css';

import React from 'react';

function NavBar(){
        return (
            
                <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                        <h1>PreferShop</h1>
                        <span>.</span>
                    </a>
        
                     {/* Nav Menu  */}
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="index.html#hero" className="active">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#features">Lineup</a></li>
                            <li><a href="index.html#pricing">Pricing</a></li>
                            <li><a href="index.html#faq">FAQs</a></li>
                            <li><a href="index.html#contact">Contact</a></li>
                        </ul>
        
                        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                    </nav>
                    {/* End Nav Menu */}
        
                     {/* <a class="btn-getstarted" href="index.html#features">News</a>  */}
                </div>
            </header>
        )
}

export default NavBar;