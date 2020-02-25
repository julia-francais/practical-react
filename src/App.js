import React, { Component } from 'react';
import './App.css';
// import { Body } from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';



class App extends Component {

  state = {
    visible: true
  }
render() {

  const buttonText = this.state.visible ? 'hide' : 'show';

  return (
    <div className="App">
      {this.state.visible ? <ImageSlider /> : <div>'I am hidden'</div>}
      <button onClick={() => {
        this.setState({ visible: !this.state.visible});
      }}>{buttonText}
      </button>
    </div>
  );
}
}

export default App;
