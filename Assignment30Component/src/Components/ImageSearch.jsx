import React, { Component } from 'react';
import styled from 'styled-components';

// Define styled components
const Title = styled.h1`
  text-align: center;
  margin: 100px auto 50px;
  font-weight: 600;
`;

const Form = styled.form`
  width: 90%;
  max-width: 600px;
  margin: auto;
  height: 80px;
  background: #434989;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  font-size: 18px;
  padding: 0 30px;
`;

const Button = styled.button`
  padding: 0 40px;
  height: 100%;
  background: #ff3929;
  font-size: 18px;
  border: 0;
  outline: 0;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;

const ShowMoreButton = styled.button`
  background: #ff3929;
  color: #fff;
  border: 0;
  outline: 0;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px auto 100px;
  cursor: pointer;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const SearchResult = styled.div`
  width: 80%;
  margin: 100px auto 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;

const ResultImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 5px;
`;

// Global styles applied through inline styles
const globalStyle = {
  '*': {
    margin: 0,
    padding: 0,
    fontFamily: `'Poppins', sans-serif`,
    boxSizing: 'border-box'
  },
  body: {
    background: '#39297d',
    color: '#fff'
  }
};

class ImageSearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      page: 1,
      results: [],
      showMore: false
    };
  }

  searchImages = async () => {
    const { keyword, page } = this.state;
    const accessKey = "NZAsLDLaHnpxlyhxlTI0iBvyP6Vf718cfP-NJaW2IBc";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (page === 1) {
        this.setState({ results: data.results });
      } else {
        this.setState(prevState => ({ results: [...prevState.results, ...data.results] }));
      }

      this.setState({ showMore: true });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ page: 1 }, this.searchImages);
  };

  handleShowMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.searchImages);
  };

  handleChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  render() {
    const { keyword, results, showMore } = this.state;

    return (
      <>
        <style>
          {`
            * {
              margin: 0;
              padding: 0;
              font-family: 'Poppins', sans-serif;
              box-sizing: border-box;
            }
            body {
              background: #39297d;
              color: #fff;
            }
          `}
        </style>
        <Title>Image Search Engine</Title>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={keyword}
            onChange={this.handleChange}
            placeholder="Search anything"
          />
          <Button type="submit">Search</Button>
        </Form>
        <SearchResult>
          {results.map(result => (
            <a href={result.links.html} target="_blank" rel="noopener noreferrer" key={result.id}>
              <ResultImage src={result.urls.small} alt={result.alt_description} />
            </a>
          ))}
        </SearchResult>
        <ShowMoreButton show={showMore} onClick={this.handleShowMore}>
          Show More
        </ShowMoreButton>
      </>
    );
  }
}

export default ImageSearchEngine;
