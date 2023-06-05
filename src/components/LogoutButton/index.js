// Write your JS code here
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    console.log(history)
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
