import React from "react";
import SearchBar from "material-ui-search-bar";
import { Redirect } from "react-router-dom"

class SearchbarComponent extends React.Component{

    constructor() {
        super();
        this.state = {
            results: [],
            dataFetched: false,
            keyword: 'pre fetch keyword'
        };
        this.fetchData = this.fetchData.bind(this);
    }
    render() {
        if (this.state.dataFetched) {
            return (
                <Redirect push to = {{
                    pathname: '/results',
                    state: {data:this.state}
                }}/>
            )
        }

        return (
            <SearchBar
                onChange={(value) => this.setState({keyword: value})}
                onRequestSearch={() => this.fetchData(this.state.keyword)}
            />
        )
    }

    fetchData(keyword) {
        let url = 'http://localhost:8080/search?name='+encodeURI(keyword);
        fetch(url,{
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then(response => {
                return response.json()})
            .then(data => {
                this.setState({results: data, dataFetched: !this.state.dataFetched});
                console.log(data);
            })
    }


}

export default SearchbarComponent