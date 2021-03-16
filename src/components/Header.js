import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu header">
            <Link to="/" className="item">Stream</Link>
            <div className="right menu">
            <Link to="/streams/new" className="item">All Streams</Link>
            </div>
        </div>
    )
}

export default Header
