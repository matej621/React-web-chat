import React, { Component } from 'react';
import './Messages.css'
import ScrollToBottom from '../ScrollToBottom/ScrollToBottom';

class Messages extends Component {
  messagesRef = React.createRef();

  componentDidUpdate() {
    // Scroll to the bottom of the messages container
    this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
  }

  render() {
    const { messages, currentMember } = this.props;
    return (
      <div className='Messages-list-container'>
      <ul className="Messages-list" ref={this.messagesRef}>
        {messages.map((m, index) => (
          <li key={index} className={m.member.id === currentMember.id ? "Messages-message currentMember" : "Messages-message"}>
            <span className="avatar" style={{ backgroundColor: m.member.clientData.color }} />
            <div className="Message-content">
              <div className="username">{m.member.clientData.username}</div>
              <div className="text">{m.text}</div>
            </div>
          </li>
        ))}
      </ul>
      <ScrollToBottom/>
      </div>
    );
  }
}

export default Messages;
