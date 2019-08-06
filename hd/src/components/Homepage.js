import React from "react";
import SearchComponent from "./SearchbarComponent";
import homepagelogo from "../assets/images/homelogo.png"

class Homepage extends React.Component{

    render() {
        const searchStyle = {
            textAlign: 'center',
            width: 800,
            margin: '0 auto',
            display: 'block'
        };

        return (
            <div style={searchStyle}>
                <img src={homepagelogo} alt={'homepage application logo'}/>
                <h1>Digital Humanities Research</h1>
                <SearchComponent />
            </div>
        )
    }
}

export default Homepage