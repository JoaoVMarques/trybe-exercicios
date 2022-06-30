import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { user: { name, email, age, image } } = this.props
    return (
      <>
        <h1>{ name }</h1>
        <img src={ image } alt={ name }></img>
        <p>email: { email }</p>
        <p>idade: { age }</p>
      </>
    )
  }
}

export default UserCard;
