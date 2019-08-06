import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import navigationbarlogo from "../assets/images/navigationbarlogo.png"
import navstyle from "../assets/css/NavigationBar.css"

class NavigationBar extends React.Component{
    render() {
        return (
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand style={navstyle}>
                            <img src={navigationbarlogo} alt={'logo for navigation bar'}/>
                            <a href="http://localhost:3000">Tweelyze</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#">Analytics</NavItem>
                        <NavItem eventKey={2} href="#">About Us</NavItem>
                    </Nav>
                </Navbar>
        );
    }
}

export default NavigationBar;
