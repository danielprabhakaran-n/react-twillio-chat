import React, { Component } from 'react';
import ChannelSearch from '../ChannelSearch';
import ChannelListItem from '../ChannelListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import { connect } from 'react-redux';

import './ChannelList.css';
import { channel } from './reducer';
import { getChannels } from './action';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getChannels());
    setTimeout(()=>{
      this.getChannelList();
    }, 100)
  }

  getChannelList = () => {
      this.setState(prevState => {
        // let channels = response.data.results.map(result => {
        //   return {
        //     photo: result.picture.large,
        //     name: `${result.name.first} ${result.name.last}`,
        //     text: 'Hello world! This is a long message that needs to be truncated.'
        //   };
        // });
        let channels = this.props.channel.channels.map(result => {
          return {
            name: `${result.name}`,
          };
        });

        return { ...prevState, channels };
      });
  }

  render() {
    return (
      <div className="channel-list">
        <Toolbar
          title="Channels"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ChannelSearch />
        {
          this.state.channels.map(channel =>
            <ChannelListItem
              key={channel.name}
              data={channel}
            />
          )
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return{
    channel : channel(state)
  }
}
export default connect(mapStateToProps)(ChannelList)