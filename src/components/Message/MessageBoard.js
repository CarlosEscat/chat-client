import React from "react";
import { connect } from "react-redux";
import { loadMessages } from "../../actions";
import MessageList from "./MessageList";
import MessageForm from "./MesageForm";
import "./MessageBoard.css";

class MessageBoard extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    console.log("ALL MESSAGES:", this.props.messages);
    return (
      <div className="messageBoard">
        <p>MESSAGE BOARD</p>

        <MessageList messages={this.props.messages} />
        <MessageForm user={this.props.location.aboutProps} />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = { loadMessages };

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageBoard);
