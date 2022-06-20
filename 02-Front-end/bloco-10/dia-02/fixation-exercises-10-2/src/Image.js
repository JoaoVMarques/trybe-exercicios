import { Component } from 'react';

class Image extends Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} width="400px"/>;
  }
}

export default Image;