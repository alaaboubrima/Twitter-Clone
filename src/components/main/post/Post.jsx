import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { CommentIcon, RetweetIcon, LikeIcon, ViewIcon, ShareIcon} from "../../../assets/icons/Icons"


import axios from 'axios'

function Post (props) {
  const [post, setPost] = React.useState([])

  const [like, setLike] = React.useState(props.likes)
  const [liked, setLiked] = React.useState(props.liked)

  const handleLikes = function () {
    setLiked(!liked)
    return liked ? setLike(like - 1) : setLike(like + 1);
  }

  React.useEffect(() => {
    axios
      .get('https://randomuser.me/api/')
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        console.log("err")
      })
  }, [])
    return (<>
      { 
      
       post.results && post.results.map((item) => (
          <div className="post" key={item.login.uuid}>
          <div className="post__avatar">
            <Avatar src={item.picture.large} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  {item.name.first}{" "}{item.name.last}
                  <span className="post__headerSpecial">
                    {props.verified && <VerifiedUserIcon className="post__badge" />} @
                    {item.login.username}
                  </span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{"Hi, I am from "}{item.location.street.name}{". And this is just a random post."}</p>
              </div>
            </div>
            <img src={props.image} alt="" />
            <div className="post__footer">
              <CommentIcon 
              className="blue"
              /> <span className="blue-span">10</span>
              <RetweetIcon /> <span className="green-span">10</span>
              <div className="zero" onClick={handleLikes}>
              <LikeIcon /></div> <span className="red-span">{like}</span>
              
              <ViewIcon /> <span className="blue-span">10</span>
              <ShareIcon />
              <span className="post-icon0"></span><span className="blues">Tip</span>
            </div>
          </div>
        </div>
        ))
      }
</>
    );
  }

export default Post;
