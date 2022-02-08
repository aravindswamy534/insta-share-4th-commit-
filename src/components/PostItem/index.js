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
    // const toggledAns = isClicked ? 'un_like' : 'like'
    // userLikedDetails(toggledAns, postId)
    // const {isClicked} = this.state
    // const toggledAns = isClicked ? 'un_like' : 'like'

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
        {searchInput !== '' && <h1>Search Results</h1>}
        <div className="profile-name-container">
          <img
            alt="post author profile"
            className="profile-pic-icon"
            src={profilePic}
          />
          <Link to={`/users/${userId}`}>
            <span className="profile-name">{userName}</span>
          </Link>
        </div>
        <img className="posted-image" src={postDetailsImageUrl} alt="post" />
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
          <FaRegComment className="message-icon" />
          <BiShareAlt className="share-icon" />
        </div>
        <p>{likesCount} likes</p>
        <p>{postDetailsCaption}</p>
        {comments.map(each2 => (
          <Comment each={each2} key={each2.userId} />
        ))}

        <p>{createdAt}</p>
      </li>
    )
  }
}

export default PostItem
