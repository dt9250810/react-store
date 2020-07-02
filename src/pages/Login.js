import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'commons/axios'
import { toast } from 'react-toastify'

export default function Login(props) {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    // 2. 獲取 form 數據
    // const formData = {
    //   email: this.emailRef.current.value, 
    //   password: this.passwordRef.current.value
    // }
    console.log("data", data)
    // 3. 處理 登入 邏輯
    try {
      const { email, password } = data
      const res = await axios.post('/auth/login', { email, password})
      const jwToken = res.data;
      console.log(jwToken);
      global.auth.setToken(jwToken)
      toast.success('Login success')
      // 4. 點擊後跳轉至首頁
      props.history.push('/')
    } catch (error) {
      console.log(error.response.data);
      const message = error.response.data.message;
      toast.error(message)
    }
  }

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