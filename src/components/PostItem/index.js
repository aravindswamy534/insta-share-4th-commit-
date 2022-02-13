import {FcLike} from 'react-icons/fc'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
// eslint-disable-next-line
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Comment from '../Comment'
import './index.css'

class PostItem extends Component {
  // eslint-disable-next-line
  state = {isClicked: true}

  toggleLikeFont = async () => {
    // eslint-disable-next-line
    const {each} = this.props
    // eslint-disable-next-line
    const {postId, likesCount} = each
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    const {isClicked} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({like_status: isClicked}),
    }
    const response = await fetch(apiUrl, requestOptions)
    const data = await response.json()
    console.log(data.message)
  }

  render() {
    const {isClicked} = this.state
    const {each, searchInput} = this.props
    const {
      comments,
      createdAt,
      postDetailsCaption,
      postDetailsImageUrl,
      likesCount,
      // eslint-disable-next-line
      postId,
      profilePic,
      userId,
      userName,
    } = each

    return (
      <li className="post-container">
        <div className="profile-name-container">
          <Link className="user-nav-redirect" to={`/users/${userId}`}>
            <div>
              <img
                alt="post author profile"
                className="profile-pic-icon"
                src={profilePic}
              />
            </div>

            <p className="profile-name">{userName}</p>
          </Link>
        </div>
        <img className="posted-image" src={postDetailsImageUrl} alt="post" />
        <div className="bottom-container">
          <div className="icon-container">
            <button
              className="like-button"
              onClick={this.toggleLikeFont}
              type="button"
            >
              {isClicked ? (
                <BsHeart testid="likeIcon" />
              ) : (
                <FcLike testid="unLikeIcon" />
              )}
            </button>
            <button type="button">
              <FaRegComment className="message-icon" />
            </button>
            <button type="button">
              <BiShareAlt className="share-icon" />
            </button>
          </div>
          {isClicked ? (
            <p className="likes-count-para">{likesCount} likes</p>
          ) : (
            <p className="likes-count-para">{likesCount + 1} likes</p>
          )}
          <p>{postDetailsCaption}</p>
          {comments.map(each2 => (
            <Comment each={each2} key={each2.userId} />
          ))}

          <p className="created-time">{createdAt}</p>
        </div>
      </li>
    )
  }
}

export default PostItem
