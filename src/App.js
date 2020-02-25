import React, { Component } from 'react';
import './App.css';
// import { Body } from './components/Body';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
import MyForm from './components/myForm';


class App extends Component {

  state = {
    visible: true,
    whichComponentToShow: 'ImageSlider'
  };

render() {
  return (
    <div className="App">
      <MyForm />
    </div>
  )
  }

//   if(this.state.whichComponentToShow === 'ImageSlider') {
//     return (
//       <div className = "App">
//       <ImageSlider />
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'Counter'});
//       }}
//       >
//         show counter
//       </button>
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'Header'});
//       }}
//       >
//         show header
//       </button>
//       </div>
//     ) 
//   } else if (this.state.whichComponentToShow === 'Counter') {
//     return (
//       <div className = "App">
//         <div
//         className={this.state.visible ? 'visible' : 'hidden'}
//         >
//           <Counter />
//         </div>
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'ImageSlider'});
//       }}
//       >
//         show ImageSlider
//       </button>
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'Header'});
//       }}
//       >
//         show header
//       </button>
//     </div>
//     );
//   } else if (this.state.whichComponentToShow === 'Header') {
//     return (
//       <div className = "App">
//       <Header />
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'Counter'});
//       }}
//       >
//         show counter
//       </button>
//       <button 
//       onClick={() => {
//       this.setState({whichComponentToShow: 'ImageSlider'});
//       }}
//       >
//         show ImageSlider
//       </button>
//     </div>
//     );
//   }

//   return null;
// }
  }

export default App;
