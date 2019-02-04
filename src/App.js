import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      <Header/>
      <Bodycomponent/>
      <Footer/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    // console.log(this.props)
    // const { name,age}=this.props
    return (
      <div className="page-header">
        Hello World
      </div>
    );
  }
}

class Bodycomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'fghjkghj'};

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
  }
  handleOnChange(event) {
    console.log("handleChangeCalled")
    this.setState({value: event.target.value});
  }
  handleOnSubmit(event){
    event.preventDefault();
    console.log("ButtonClick")
    
    const {value}=this.state

    const obj={

      input:value,
      uijhiuhi:"sssss",
      aa:"aaaa"
    }
    console.log(obj)
    
  }
  render() {
    console.log("rerendered")
    console.log(this.state)

    const {value}=this.state
    // console.log(this.props)
    // const { name,age}=this.props
    return (
      <div className="page-body">
    <form>
    <label>
    Name:
    <input type="text" name="name" value={value} onChange={this.handleOnChange} />
    </label>
    <button onClick={this.handleOnSubmit}>dfgh</button>
    </form>
      </div>
    );
  }
}
class Footer extends Component {
  render() {
    // console.log(this.props)
    // const { name,age}=this.props
    return (
      <div className="page-header">
        Test Footer
      </div>
    );
  }
}



export default App;
