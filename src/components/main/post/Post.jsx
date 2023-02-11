import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import axios from 'axios'

function Post (props) {
  const [post, setPost] = React.useState([])

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
  console.log(post)
    return (<>
      { 
      
       post.results && post.results.map((item) => (
          <div className="post">
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
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
        ))
      }
</>
    );
  }

export default Post;
