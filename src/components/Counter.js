import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        };
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
                <button onClick={this.handleAddButtonClick}>increment</button>
                <button onClick={this.handleSubButtonClick}>decrement</button>
            </div>
        </div>
      );
    }
  };

