import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'


class Login extends React.Component {

  // constructor() {
  //   super()
  //   console.log(this)
  //   this.handleClick = this.handleClick.bind(this)
  // }

  msg = "Clicked"

  handleClick = (msg, event) => {
    event.preventDefault()
    alert(msg)
    console.log(event)
  }

  render() {
    return (
      <div className="login-wrapper">

        <a href="/login" className="button" onClick={event => this.handleClick('msgggggg', event)}>
          click me
        </a>


        <form className="box login-box">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}


export default Login;