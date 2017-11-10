import React, { Component } from 'react';
import Coded from './Coded';
import CodedList from './CodedList';
import Navbar from './Navbar';
import './CodedApp.css';

class CodedApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CodedList />
      </div>
    );
  }
}

export default CodedApp;
