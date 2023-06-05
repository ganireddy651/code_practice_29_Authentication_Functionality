// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onSubmitSuccess = jwtTkoken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLogin = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
