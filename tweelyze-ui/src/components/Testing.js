import React from 'react';
import NavigationBar from './NavigationBar';
import SearchPageResultsStyle from "../assets/css/SearchResultsPage.css"
import { Pagination } from 'react-bootstrap';

class SearchResultsPage  extends React.Component{
    constructor(props) {
        super(props);
        console.log("Printing in the results component: this.props.location.state.data.results")
        console.log(this.props.location.state.data.results)
        this.state = {
            results: this.props.location.state.data.results,
            keyword: this.props.location.state.data.keyword,
            currentPage: 1,
            itemsPerPage: 2
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("clicked");
        this.setState({
            currentPage: Number(event.target.id)
        })
        console.log(this.state.currentPage)
    }

    render() {

        const {results, currentPage, itemsPerPage} = this.state;

        // Logic for displaying results
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItemsToDisplay = results.slice(indexOfFirstItem, indexOfLastItem);
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(results.length / itemsPerPage); i++) {
            pageNumbers.push(<button key={i} onClick={this.handleClick}>{i}</button>);
        }
        const renderItems = currentItemsToDisplay.map((item, index) => {
            return (
                <div>
                    <h3 style={{color: '#1a0dab'}} key={index}>{item.text}</h3>
                    <a href={'https://google.com'} key={index}>{item.tweetUrl}</a>
                    <br/>
                    <p><span style={{fontWeight:'bold', textColor:'#6a6a6a'}} key={index}>topic: </span>{item.topic}</p>
                    <p><span style={{fontWeight:'bold', textColor:'#6a6a6a'}} key={index}>city: </span>{item.city}</p>
                    <p><span style={{fontWeight:'bold', textColor:'#6a6a6a'}} key={index}>lang: </span>{item.lang}</p>
                    <p><span style={{fontWeight:'bold', textColor:'#6a6a6a'}} key={index}>Hashtags: </span></p>
                    <hr/>
                </div>
            )
        })

        return(
            <div>
                <NavigationBar/>
                <h4 style={{textAlign:'center', color:'#1a0dab'}}>Showing search results for <span style={{fontWeight:'bold', fontStyle:'Italic'}}>'{this.state.keyword}'</span></h4>
                <hr/>
                <div className={'wrap'} style={SearchPageResultsStyle}>
                    <div className={'fleft'}>left column</div>
                    <div className={'fcenter'}>
                        {renderItems}
                        <Pagination>{pageNumbers}</Pagination>
                    </div>
                    <div className={'fright'}>right column</div>
                </div>
            </div>
        )
    }

}

export default SearchResultsPage;