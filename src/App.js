import {Component} from 'react'
import Welcome from './components/Welcome'
import './App.css'

class App extends Component {
  state = {isLoggedIn: false}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }
    return (
      <>
        <div className="container">{this.renderAuthButton()}</div>
        <div className="container">
          <h1>React JS</h1>
          {authButton}
          {isLoggedIn ? (
            <button type="button">Logout</button>
          ) : (
            <button type="button">Login</button>
          )}
          {isLoggedIn && <button type="button">Logout</button>}
          {!isLoggedIn && <button type="button">Login</button>}
          <Welcome greeting="Hello" />
        </div>
      </>
    )
  }
}

export default App
