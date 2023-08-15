import React, { Component } from 'react';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import './App.css'
import randomName from './Helpers/RandomName';
import randomColor from './Helpers/RandomColor';


class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      member: {
        username: randomName(),
        color: randomColor()
      }
    };
    this.drone = new window.Scaledrone("HZ4xldvjpNNzBudi", {
      data: this.state.member
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
    this.drone.on('open', error => {
      if (error) {
        console.error(error);
      } else {
        const member = { ...this.state.member };
        member.id = this.drone.clientId;
        this.setState({ member });
      }
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  };

  render() {
    return (
      <div>
        <div className="app-header">
          <h1>Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
