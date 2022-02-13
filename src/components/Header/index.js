import {Component, React} from 'react'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  withRouter,
} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
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

  onEnterSearchInput = () => {
    const {userEnteredSearchedValue} = this.props
    // if (event.key === 'Enter') {
    const {userEnteredText} = this.state
    userEnteredSearchedValue(userEnteredText)
    // }
    // return null
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
              //   onKeyDown={this.onEnterSearchInput}
              value={userEnteredText}
            />
            <button
              onClick={this.onEnterSearchInput}
              testid="searchIcon"
              type="button"
              className="search-button"
            >
              <FaSearch className="search-icon" alt="searchIcon" />
            </button>
          </li>
          <li className="link-container">
            <Link className="home" to="/">
              <h1 className="home">Home</h1>
            </Link>
            <Link className="my-profile" to="/my-profile">
              <h1 className="my-profile">Profile</h1>
            </Link>
          </li>
          <li className="logout-button">
            <button
              className="btn-logout"
              type="button"
              onClick={this.onClickLogout}
            >
              {/* <FiLogOut onClick={this.onClickLogout} /> */}
              Logout
            </button>
          </li>
        </ul>
        <div className="mobile-device">
          <div className="row">
            <div className="col-md-12">
              <Router>
                <Navbar
                  className="navbar-container"
                  bg="dark"
                  variant="dark"
                  expand="lg"
                  sticky="top"
                >
                  <Navbar.Brand href="/">
                    <img
                      className="logo-icon"
                      src="https://res.cloudinary.com/aravindswamy534/image/upload/v1643547907/react%20insta%20share/Standard_Collection_8_mm8tng.png"
                      alt="website logo"
                    />
                    <span className="span">Insta Share</span>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="navbar-three"
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto share">
                      <li className="search-container">
                        <input
                          className="search-bar"
                          placeholder="Search Caption"
                          type="search"
                          onChange={this.userSearchedInput}
                          //   onKeyDown={this.onEnterSearchInput}
                          value={userEnteredText}
                        />
                        <button
                          onClick={this.onEnterSearchInput}
                          testid="searchIcon"
                          type="button"
                          className="search-button"
                        >
                          <FaSearch className="search-icon" alt="searchIcon" />
                        </button>
                      </li>
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/my-profile">Profile</Nav.Link>
                      <Nav.Link onClick={this.onClickLogout}>Logout</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
                <br />
              </Router>
            </div>
          </div>
        </div>
        <hr />
      </>
    )
  }
}

export default withRouter(Header)
