import React, { useState } from 'react';
import './App.css';

const accessKey = "NZAsLDLaHnpxlyhxlTI0iBvyP6Vf718cfP-NJaW2IBc";

function App() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);

    const searchImages = async () => {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            setResults(data.results);
        } else {
            setResults(prevResults => [...prevResults, ...data.results]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        searchImages();
    };

    const handleShowMore = () => {
        setPage(prevPage => prevPage + 1);
        searchImages();
    };

    return (
        <div className="app">
            <h1>Image Search Engine</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Search anything" 
                />
                <button type="submit">Search</button>
            </form>
            <div id="Search-result">
                {results.map((result) => (
                    <a key={result.id} href={result.links.html} target="_blank" rel="noopener noreferrer">
                        <img src={result.urls.small} alt={result.alt_description} />
                    </a>
                ))}
            </div>
            {results.length > 0 && (
                <button id="show-more-btn" onClick={handleShowMore}>
                    Show More
                </button>
            )}
        </div>
    );
}

export default App;
