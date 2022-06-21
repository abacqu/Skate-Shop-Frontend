import { login, logout } from "../services/firebase";

const SignUpLogin = (props) => {

  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  }

  return (
    <div className="sign-up-login">
      <ul>
        { props.user ? (
          <>
            <li className="greeting-list-item">Welocme, {props.user.displayName} 
              <img 
                src={props.user.photoURL}
                style={photoStyles}
                alt={props.user.displayName} 
              />
            </li>
            <li onClick={logout}>Logout</li>
          </>
          ) : <li onClick={login}>Login</li>
        }
      </ul>
    </div>
  )
}

export default SignUpLogin