import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export default function Login(props) {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // 2. 獲取 form 數據
    // const formData = {
    //   email: this.emailRef.current.value, 
    //   password: this.passwordRef.current.value
    // }
    console.log(data)
    // 3. 處理 登入 邏輯

    // 4. 點擊後跳轉至首頁
    // this.props.history.push('/')
  }
  console.log(errors)

  return (
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
              <input 
                className={`input ${errors.email && 'is-danger'}`} 
                type="email" 
                placeholder="Email" 
                name="email"
                ref={register({
                  required: 'email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                    message: 'invalid email format'
                  },
                  minLength: {
                    value: 6,
                    message: 'can not be less than 6 words'
                  }
                })}
              />
              {errors.email && (
                <span className="helper has-text-danger">{errors.email.message}</span>
              )}
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input 
              className={`input ${errors.password && 'is-danger'}`} 
              type="password" 
              placeholder="Password" 
              name="password"
              ref={register({
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'can not be less than 6 words'
                }
              })}
            />
            {errors.password && (
              <span className="helper has-text-danger">{errors.password.message}</span>
            )}
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success is-fullwidth">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}