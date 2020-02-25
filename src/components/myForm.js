import React from 'react';

export default class MyForm extends React.Component {

    state= {
        name: '',
        favoritePet: "",
        rememberMe: false,
        title: 'Mr.'
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value});
    }

    handleChangeFavoritePet = (event) => {
        this.setState({ favoritePet: event.target.value});
    }

    handleChangeCheckBox = (event) => {
        this.setState({rememberMe: event.target.checked});
    }

    handleSelect = (event) => {
        this.setState({title: event.target.value});
    }

    handleSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
    <div>
        <div>
            <input value={this.state.name} onChange={this.handleChange}/>
            <textarea value={this.state.favoritePet} onChange={this.handleChangeFavoritePet}/> 
            <input type="checkbox" checked={this.state.rememberMe} onChange={this.handleChangeCheckBox}/>
        </div>
        <div>
            <select value={this.state.title} onChange={this.handleSelect}>
                <option>Mr.</option>
                <option>Miss.</option>
                <option>Mrs.</option>
            </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
    </div>
        )
    }
}