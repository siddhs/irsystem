import React from "react";
import SearchBar from "material-ui-search-bar";
import AutoComplete from 'material-ui/AutoComplete';
import Redirect from "react-router-dom/es/Redirect";

class SearchBarPage extends React.Component{
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
                <Redirect to = {{
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
        // let url = 'http://localhost:8080/results?q=' + encodeURI(keyword);
        console.log(encodeURI(keyword))
        let url = 'http://192.168.1.207:3007/api/v1/tweetdata/'+encodeURI(keyword)
        console.log(url)
        fetch(url,{
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then(response => {
                console.log(response)
                return response.json()})
            .then(data => {
                this.setState({results: data, dataFetched: !this.state.dataFetched});
                })
            .then(() => {
                if (this.state.dataFetched) {
                    console.log("Data has been fetched successfully")
                }
            })
    }
}
export default SearchBarPage;