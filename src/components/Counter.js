import React from 'react';

export default class Counter extends React.Component {
      state = {
            count: 0
        };

        componentWillUnmount() {
            console.log('unmounting...');
        }

        componentDidMount() {
            console.log('mounting')
        }

    handleAddButtonClick = () => {
        this.setState({
            count: this.state.count +1 
        }) ;
    };

    handleSubButtonClick = () => {
        this.setState({
            count: this.state.count -1
        });
    };

    render() {
      return (
        <div>
            <div>
                count: {this.state.count}
                <div>
                    <button onClick={this.handleAddButtonClick}>increment</button>
                    <button onClick={this.handleSubButtonClick}>decrement</button>
                </div>
            </div>
        </div>
      );
    }
  };

