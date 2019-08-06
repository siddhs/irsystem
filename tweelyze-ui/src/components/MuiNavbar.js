import React from 'react';

class MuiNavbar extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="http://localhost:3000">Tweelyze</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="http://localhost:3000">Home</a></li>
                            <li><a href="http://localhost:3000/analytics">Analytics</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MuiNavbar;