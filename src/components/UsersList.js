import React from "react";
import { connect } from "react-redux";
import { loadUsers } from "../actions";
import Users from "./Users";
import "./UserList.css";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    console.log("ALL users:", this.props.users);
    return (
      <div className="userlist">
        SELECT YOUR USER:
        <br />
        <Users users={this.props.users} />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = { loadUsers };

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
