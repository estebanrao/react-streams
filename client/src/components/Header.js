import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                <h1>Streamy</h1>
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;
