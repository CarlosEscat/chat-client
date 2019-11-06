import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../actions";
import "./MessageForm.css";

class MessageForm extends React.Component {
  state = {
    message: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const senderId = this.props.user.user.id;
    const { message } = this.state;

    this.props.addMessage(message, senderId);

    this.setState({
      message: ""
    });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.onSubmit}>
            Hello {this.props.user.user.name} send a message:
            <input
              className="text"
              type="textarea"
              name="message"
              value={this.state.message}
              onChange={this.onChange}
            />
            <button type="submit"> Send </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MessageForm);
