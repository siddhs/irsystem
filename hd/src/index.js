import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SearchResultsPage from "./components/SearchResultComponent"
import AnnotationComponent from "./components/AnnotationComponent";



const routing = (
    <Router>
        <div>
            <Route exact path={'/'} component={App}/>
            <Route path={'/results'} component={SearchResultsPage}/>
            <Route path={'/annotate'} component={AnnotationComponent}/>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
