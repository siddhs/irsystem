import React from "react";
import SearchBar from "material-ui-search-bar";
import logo from "../assets/images/searchpagelogo.png"
import AutoComplete from 'material-ui/AutoComplete';
import Redirect from "react-router-dom/es/Redirect";
import SearchBarPage from "./SearchBarComponent"


class Homepage extends React.Component{
    constructor() {
        super();
    }
    render() {
        const searchStyle = {
            textAlign: 'center',
            width: 800,
            margin: '0 auto',
            display: 'block'
        };

        return (
            <div style={searchStyle}>
                <img src={logo} alt={'homepage application logo'}/>
                <br/>
                <br/>
                <SearchBarPage/>
            </div>
        )
    }
}

export default Homepage;