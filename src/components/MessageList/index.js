import React, { Component } from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import { connect } from 'react-redux';
import { message } from './reducer';

import './MessageList.css';

import { getMessages } from './action';

const MY_USER_ID = 'apple';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getMessages());
    setTimeout(()=>{
      this.getMessagesList();
    }, 100)
  }

  getMessagesList = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        messages : this.props.message.messages
      };
    });
  }

  renderMessages() {
    let i = 0;
    let messageCount = this.state.messages.length;
    let messages = [];

    while (i < messageCount) {
      let previous = this.state.messages[i - 1];
      let current = this.state.messages[i];
      let next = this.state.messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      messages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return messages;
  }

  render() {
    return (
      <div className="message-list">
        <Toolbar
          title="Title"
          rightItems={[
            // <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-close" />,
            <ToolbarButton key="phone" icon="ion-ios-call" />
          ]}
        />

        {/* <div className="message-list-container">{this.renderMessages()}</div> */}

        <Compose
          rightItems={[
            <ToolbarButton key="photo" icon="ion-md-send" />
          ]} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message : message(state)
  }
}

export default connect(mapStateToProps)(MessageList)