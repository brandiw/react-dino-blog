import React, { Component } from 'react'
import './App.css'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  render() {
    let currentYear = new Date().getFullYear()
    return (
      <div className="App">
        <Header />
        <Content post={this.props.post} />
        <Footer name="Brandi" year={currentYear} />
      </div>
    )
  }
}

export default App
