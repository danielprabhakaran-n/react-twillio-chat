import React, { Component } from 'react';
import shave from 'shave';
import ToolbarButton from '../ToolbarButton';

import './ChannelListItem.css';

export default class ChannelListItem extends Component {
  componentDidMount() {
    shave('.conversation-snippet', 20);
  }

  render() {
    const { name } = this.props.data;

    return (
      <div className="conversation-list-item">
        {/* <img className="conversation-photo" src={photo} alt="conversation" /> */}
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
        </div>
        <div className="conversation-close">
          <ToolbarButton key="close" icon="ion-ios-close" />
        </div>
      </div>
    );
  }
}