// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = props => {
  const {history} = props

  return (
    <>
      <Header />
      <div>
        <h1>Home Route</h1>
        <LogoutButton history={history} />
      </div>
    </>
  )
}

export default Home
