import React, { useState, useEffect } from 'react';


const QuoteOfTheDay = () => {
    const [quote, setQuote] = useState('Loading....');
    const [author, setAuthor] = useState('Loading...');
    const api_url = 'https://api.quotable.io/random';

    const fetchQuote = async () => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const tweet = () => {
        const tweetText = `"${quote}" — by ${author}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(twitterUrl, 'Tweet window', 'width=600,height=300');
    };

    return (
        <div className="Quote-box">
            <h2>Quote of the day</h2>
            <blockquote>{quote}</blockquote>
            <span>{author}</span>
            <div>
                <button onClick={fetchQuote}>New Quote</button>
                <button onClick={tweet}>
                    <img src="twitter-icon.png" alt="Tweet" /> Tweet
                </button>
            </div>
        </div>
    );
};

export default QuoteOfTheDay;
