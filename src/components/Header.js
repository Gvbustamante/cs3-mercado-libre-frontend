import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <div className="container-fluid">
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-4 mb-lg-0">
                        <h1>Marketplace CS3</h1>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;
