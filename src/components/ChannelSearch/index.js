import React, { Component } from 'react';
import './ChannelSearch.css';

export default class ChannelSearch extends Component {
  render() {
    return (
      <div className="channel-search">
        <input
          type="search"
          className="channel-search-input"
          placeholder="Search Messages"
        />
      </div>
    );
  }
}