import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchResultsPage from './components/SearchResultsPage'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import WordCloud from './components/WordCloudComponent';

import Analytics from './components/AnalyticsPage';

const routing = (
    <Router>
        <div>
            <Route exact path={'/'} component={App}/>
            <Route path={'/results'} component={SearchResultsPage}/>
            <Route path={'/analytics'} component={Analytics}/>
            <Route path={'/cloud'} component={WordCloud}/>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));
