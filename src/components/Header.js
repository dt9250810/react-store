import React from 'react'
import UserProfile from 'components/UserProfile'
import Panel from 'components/Panel'
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = props => {
  const openProfile = () => {
    Panel.open({
      component: UserProfile,
      props: {
        user: props.user
      },
      callback: data => {
        console.log(data);
        if(data === 'logout') {
          props.history.go(0)
          toast.success("Logout success")
        }
      }
    });
  } 

  return (
    <div className="header">
      <div className="grid">
        <div className="start">
          <Link to="/">Home</Link>
        </div>
        <div className="end">
          {props.user.nickname ? (
            <span className="nickname" onClick={openProfile} >
              <i className="far fa-user"></i>
              {props.user.nickname}
            </span>
          ) : (
            <React.Fragment>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}


export default withRouter(Header);