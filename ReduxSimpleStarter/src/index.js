
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAxcKgPgDddJX1FXeQDmTSyTh8RzdhSjZM';

// Create a new component. This component should produce some HTML.
// Take this component's generated HTML, place it in the DOM.

const App = () => (

    <SearchBar />
);

ReactDOM.render(<App />, document.querySelector('.container'));