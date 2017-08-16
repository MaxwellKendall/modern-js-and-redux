import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDeGJDQOeernziYoE5OSNOyFrv2hI8tyZ0';

// (1) create a new component that produces some html

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}


// (2) Take the components generated html and put it on the page (in the DOM)

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
