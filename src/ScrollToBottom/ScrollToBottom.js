import React, { Component } from 'react';

class ScrollToBottom extends Component {
  messagesEndRef = React.createRef();

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return <div ref={this.messagesEndRef} />;
  }
}

export default ScrollToBottom;
