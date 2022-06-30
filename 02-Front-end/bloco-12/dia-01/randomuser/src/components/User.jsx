import React, { Component } from "react";
import UserCard from "./UserCard";
import Load from "./Load"

class User extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  getUser(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    }
  }


  async fetchUser() {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url);
    const userObject = await response.json();
    this.setState({
      user: userObject.results,
      loading: false,
    });
  }

  render() {
    const { user, loading } = this.state;
    if(loading) return <Load />
    return (
      <div>
        {user.map((currentUser) => (
          <UserCard user={this.getUser(currentUser)} key={currentUser.login.uuid}/>
        ))}
      </div>
    );
  }
}

export default User;