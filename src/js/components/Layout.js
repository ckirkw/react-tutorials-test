import React from 'react';
// import Footer from './Footer';
// import Header from './Header';
import {Header, Footer} from 'react-tutorials';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome'
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {

    console.log('THIS IS PROOF THAT WERE USING THE RIGHT ONE');
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
