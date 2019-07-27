import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChangeOnInputForName = this.handleChangeOnInputForName.bind(this)
    this.handleChangeOnInputForName = this.handleChangeOnInputForName.bind(this)
  }

  handleSubmitOnForm(event) {
    console.debug('name', this.state.value)
    event.preventDefault()
  }

  handleChangeOnInputForName(event) {
    this.setState({value: event.target.value})
  }

  render() {
    let inputForName

    return (
      <div className="App">
        <h1>Give your name</h1>
        <form onSubmit={this.handleSubmitOnForm}>
          <input type="text" placeholder="Your name?" onChange={this.handleChangeOnInputForName}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
