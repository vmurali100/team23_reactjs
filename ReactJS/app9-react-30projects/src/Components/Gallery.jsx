import React, { Component } from "react";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      userinput: "",
    };
  }

  searchPhotos = async () => {
    const { results } = await (
      await fetch(
        `https://api.unsplash.com/search/photos?query=${this.state.userinput}&client_id=-rZ9Hyx27sJiorOQEpZCH-ExarlbnyOntL8ALB8S6Mk`
      )
    ).json();

    const newStateObject = { ...this.state };
    newStateObject.photos = results;
    this.setState(newStateObject);
  };

  handleChange=(e)=>{
    const newStateObject = { ...this.state };
    newStateObject.userinput = e.target.value;
    this.setState(newStateObject);

  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.userinput}
            onChange={this.handleChange}
            name="userinput"
            id=""
          />{" "}
          <button type="button" onClick={this.searchPhotos}>
            Search
          </button>
        </form>

        <ul>
          {this.state.photos.map((obj, i) => (
            <li key={i}>
              <img src={obj.urls.thumb} alt="" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
