import React from 'react';
import NavigationBar from './NavigationBar';
import SearchPageResultsStyle from "../assets/css/SearchResultsPage.css"
import Pagination from './Pagination';

class SearchResultsPage  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state.data.results,
            isCityFilterApplied: false, //NEW STATE
            isTopicFilterApplied: false,
            isLanguageFilterApplied: false,
            isFiltered: false,
            filteredResults: [], //NEW STATE
            keyword: this.props.location.state.data.keyword,
            pageOfItems: [],
            cities: {
                'New York City (NYC)': false,
                'Delhi': false,
                'Bangkok': false,
                'Paris': false,
                'Mexico City': false
            },
            topics: {
                'Environment': false,
                'Crime': false,
                'Politics': false,
                'Social Unrest': false,
                'Infrastructure': false
            },
            languages: {
                'Hindi': false,
                'English': false,
                'Thai': false,
                'French': false,
                'Spanish': false
            }
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.onTopicChange = this.onTopicChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    onChangePage(pageOfItems) {
        // update local state with new page of items
        this.setState({pageOfItems});
    }

    // setting each city in cities object (city chechboxes which are clicked on UI) to true
    onCityChange(event) {
        const val = event.target.checked;
        const name = event.target.name;
        var cityFilterCheck = false;
        var filteredCities = [];
        const filteredResultsArray = [];
        let checkedCities = Object.assign({},this.state.cities,{[name]: val});
        if (Object.keys(checkedCities).some(key => checkedCities[key])) {
            cityFilterCheck = true
        }
        this.setState({
            cities: checkedCities,
            isCityFilterApplied: cityFilterCheck
        },function () {
            console.log("state of city filter",this.state.isCityFilterApplied);
            for (let key in this.state.cities) {
                if (this.state.cities.hasOwnProperty(key) && this.state.cities[key] === true) {
                    filteredCities.push(key);
                }
            }
            if (filteredCities.length > 0) {
                if (this.state.filteredResults.length === 0) {
                    this.state.results.forEach((result) => {
                        for (let i = 0; i < filteredCities.length; i++) {
                            if (result.city === filteredCities[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                else {
                    this.state.filteredResults.forEach((result) => {
                        for (let i = 0; i < filteredCities.length; i++) {
                            if (result.city === filteredCities[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                this.setState({
                    filteredResults: filteredResultsArray,
                    isFiltered: true
                })
            }
            else {
                this.setState({
                    isFiltered: false,
                    filteredResults: []
                })
            }
        });
    }

    // setting each topic in topics object (topic chechboxes which are clicked on UI) to true
    onTopicChange(event) {
        const val = event.target.checked;
        const name = event.target.name;
        var topicFilterCheck = false;
        const filteredTopics = [];
        const filteredResultsArray = [];
        let checkedTopics = Object.assign({},this.state.topics,{[name]: val});
        if (Object.keys(checkedTopics).some(key => checkedTopics[key])) {
            topicFilterCheck = true
        }
        this.setState({
            topics: checkedTopics,
            isTopicFilterApplied: topicFilterCheck
        },function () {
            console.log("state of topic filter",this.state.isTopicFilterApplied);
            for (let key in this.state.topics) {
                if (this.state.topics[key] === true) {
                    filteredTopics.push(key);
                }
            }
            if (filteredTopics.length > 0) {
                if (this.state.filteredResults.length === 0) {
                    this.state.results.forEach((result) => {
                        for (let i = 0; i < filteredTopics.length; i++) {
                            if (result.city === filteredTopics[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                else {
                    this.state.filteredResults.forEach((result) => {
                        for (let i = 0; i < filteredTopics.length; i++) {
                            if (result.topic === filteredTopics[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                this.setState({
                    filteredResults: filteredResultsArray,
                    isFiltered: true
                })
            }
            else {
                this.setState({
                    isFiltered: false,
                    filteredResults: []
                });
            }
        });
    }


    // setting each language in languages object (language chechboxes which are clicked on UI) to true
    onLanguageChange(event) {
        const val = event.target.checked;
        const name = event.target.name;
        var languageFilterCheck = false;
        const filteredLanguages = [];
        const filteredResultsArray = [];
        let checkedLanguages = Object.assign({}, this.state.languages, {[name]: val});
        if (Object.keys(checkedLanguages).some(key => checkedLanguages[key])) {
            languageFilterCheck = true;
        }
        this.setState({
            languages: checkedLanguages,
            isLanguageFilterApplied: languageFilterCheck
        }, function () {
            console.log("state of language filter", this.state.isLanguageFilterApplied);
            for (let key in this.state.languages) {
                if (this.state.languages[key] === true) {
                    filteredLanguages.push(key);
                }
            }
            if (filteredLanguages.length > 0) {
                if (this.state.filteredResults.length === 0) {
                    console.log('inside pehla wala if jab filteredResults zero hai');
                    this.state.results.forEach((result) => {
                        for (let i = 0; i < filteredLanguages.length; i++) {
                            if (result.lang === filteredLanguages[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                else {
                    this.state.filteredResults.forEach((result) => {
                        for (let i = 0; i < filteredLanguages.length; i++) {
                            if (result.city === filteredLanguages[i] && result.city != null) {
                                filteredResultsArray.push(result)
                            }
                        }
                    })
                }
                this.setState({
                    filteredResults: filteredResultsArray,
                    isFiltered: true
                })
            }
            else {
                this.setState({
                    isFiltered: false,
                    filteredResults: []
                })
            }
        });
    }

    // rendering checkboxes for topics
    renderCityFilter() {
        const cities = ['New York City (NYC)','Delhi','Bangkok','Paris','Mexico City'];
        return cities.map((city,i) => {
            return (
                <div key={i} className={'city-filters'}>
                    <input
                        type="checkbox"
                        name={city}
                        onChange={this.onCityChange}
                        value={this.state.cities[city]}/>&nbsp;&nbsp;
                    <label key={i} style={{fontSize:12}}>
                        {city}
                    </label>
                </div>

            )
        })
    }

    // rendering checkboxes for topics
    renderTopicFilter() {
        const topics = ['Environment','Crime','Politics','Social Unrest','Infrastructure'];
        return topics.map((topic,i) => {
            return (
                <div key={i}>
                    <input
                        type="checkbox"
                        name={topic}
                        onChange={this.onTopicChange}
                        value={this.state.topics[topic]}/>&nbsp;&nbsp;
                    <label key={i} style={{fontSize:12}}>
                        {topic}
                    </label>
                </div>

            )
        })
    }

    // rendering checkboxes for languages
    renderLanguageFilter() {
        const languages = ['Hindi','English','Thai','French','Spanish'];
        return languages.map((language,i) => {
            return (
                <div key={i}>
                    <input
                        type="checkbox"
                        name={language}
                        onChange={this.onLanguageChange}
                        value={this.state.languages[language]}/>&nbsp;&nbsp;
                    <label key={i} style={{fontSize:12}}>
                        {language}
                    </label>
                </div>

            )
        })
    }

    render() {

        const renderItems = this.state.pageOfItems.map((item, index) => {
            return (
                <div key={index}>
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
        });

        return (
            <div>

                <h4 style={{textAlign:'center', color:'#1a0dab'}}>Showing search results for <span style={{fontWeight:'bold', fontStyle:'Italic'}}>'{this.state.keyword}'</span></h4>
                <hr/>
                <div className={'wrap'} style={SearchPageResultsStyle}>
                    <div className={'fleft'}>
                        <h4>City</h4>
                        {this.renderCityFilter()}
                        <hr/>
                        <h4>Topics</h4>
                        {this.renderTopicFilter()}
                        <hr/>
                        <h4>Language</h4>
                        {this.renderLanguageFilter()}
                        <hr/>
                    </div>
                    <div className={'fcenter'}>
                        {renderItems}
                        <Pagination items={this.state.isFiltered ? this.state.filteredResults : this.state.results} onChangePage={this.onChangePage}/>
                    </div>
                    <div className={'fright'}/>
                </div>
            </div>
        )
    }
}

export default SearchResultsPage;