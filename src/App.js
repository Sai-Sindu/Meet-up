import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import DetailsContext from './context/DetailsContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegister: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  register = () => {
    this.setState({isRegister: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegister, showError} = this.state
    return (
      <DetailsContext.Provider
        value={{
          name,
          topic,
          isRegister,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          register: this.register,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </DetailsContext.Provider>
    )
  }
}
export default App
