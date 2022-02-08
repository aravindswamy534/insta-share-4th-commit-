// // eslint-disable-next-line
// import Slider from 'react-slick'
// // eslint-disable-next-line
// import {v4} from 'uuid'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import './index.css'

// const settings = {
//   dots: true,
//   slidesToShow: 5,
//   slidesToScroll: 1,
// }

// const InstaStories = props => {
//   const {instaStories} = props
//   return (
//     <div className="story-container slider-container">
//       <Slider {...settings}>
//         {instaStories.map(each => (
//           <div key={v4()} className="card-post-container">
//             <img
//               className="stories-icon"
//               src={each.storyUrl}
//               alt="user story"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }
// export default InstaStories

import './index.css'

const InstaStories = props => {
  const {each} = props
  // eslint-disable-next-line
  const {storyUrl, userId, userName} = each

  return (
    <li className="card-post-container">
      <img className="stories-icon" src={storyUrl} alt="user story" />
    </li>
  )
}

export default InstaStories
