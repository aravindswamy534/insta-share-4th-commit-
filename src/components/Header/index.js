import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
// eslint-disable-next-line
import {ImHome} from 'react-icons/im'
// eslint-disable-next-line
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'

import './index.css'

class Header extends Component {
  state = {userEnteredText: ''}

  // eslint-disable-next-line
  onClickLogout = props => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  userSearchedInput = event => {
    this.setState({userEnteredText: event.target.value})
  }

  onEnterSearchInput = event => {
    const {userEnteredSearchedValue} = this.props
    if (event.key === 'Enter') {
      const {userEnteredText} = this.state
      userEnteredSearchedValue(userEnteredText)
    }
    return null
  }

  render() {
    const {userEnteredText} = this.state
    return (
      <>
        <ul className="header-container">
          <li>
            <Link className="icon-container" to="/">
              <img
                className="logo-icon"
                src="https://res.cloudinary.com/aravindswamy534/image/upload/v1643547907/react%20insta%20share/Standard_Collection_8_mm8tng.png"
                alt="website logo"
              />
              <h1 className="font-heading">Insta Share</h1>
            </Link>
          </li>
          <li className="search-container">
            <input
              className="search-bar"
              placeholder="Search Caption"
              type="search"
              onChange={this.userSearchedInput}
              onKeyDown={this.onEnterSearchInput}
              value={userEnteredText}
            />
            <FaSearch
              testid="searchIcon"
              className="search-icon"
              alt="searchIcon"
            />
          </li>
          <li className="link-container">
            <Link className="home" to="/">
              {/* <ImHome /> */}
              <h1>Home</h1>
            </Link>
            <Link to="/my-profile">
              <h1>Profile</h1>
            </Link>
          </li>
          <li className="logout-button">
            {/* <FiLogOut onClick={this.onClickLogout} /> */}
            <button
              className="btn-logout"
              type="button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </>
    )
  }
}

export default withRouter(Header)
