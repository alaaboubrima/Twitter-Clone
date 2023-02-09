import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import IMAGES from "../../../assets/images";

function TweetBox() {

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={IMAGES.twitter} />
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          type="submit"
          className="tweetBox__tweetButton"
        >
          <span>Tweet</span>
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
