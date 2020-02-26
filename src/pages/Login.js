import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'


class Login extends React.Component {

  handleSubmit = event => {
    // 1. 阻止默認事件行為(跳轉)
    event.preventDefault()

    // 2. 獲取 form 數據

    // 3. 處理 登入 邏輯

    // 4. 點擊後跳轉至首頁
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
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
              <button class="button is-success is-fullwidth">
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