import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import IMAGES from "../../../assets/images";
import PublishIcon from "@material-ui/icons/Publish";
import { ImageIcon, GifIcon, PollIcon, EmojiIcon, ScheduleIcon, LocationIcon} from "../../../assets/icons/Icons"
import { useState } from 'react';
import { Select, MenuItem } from '@material-ui/core';



function TweetBox() {

  const [showDivs, setShowDivs] = useState(false);

  const handleDivClick = () => {
    setShowDivs(true);
  };

  const [selectedValue, setSelectedValue] = useState("Everyone");
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (value) => {
    setSelectedValue(value);
    setShowOptions(false);
  };

  const [selectedValue2, setSelectedValue2] = useState("Everyone can reply");
  const [showOptions2, setShowOptions2] = useState(false);

  const handleClick2 = (value) => {
    setSelectedValue2(value);
    setShowOptions2(false);
  };


  return (
    <div className="tweetBox">
      <div className="avatar">
        <Avatar src={IMAGES.twitter} />
      </div>
      <form className="form">
        {showDivs && <div className="audience">
          <div className="select-box" onClick={() => setShowOptions(!showOptions)}>
            <div className="selected-value">{selectedValue}{" >"}</div>
              {showOptions && (
                <ul className="options">
                  <li className="option0">
                    Choose audience
                  </li>
                  <li className="option" onClick={() => handleClick("Everyone")}>
                    Everyone
                  </li>
                  <li
                    className="option"
                    onClick={() => handleClick("Twitter Circle")}
                  >
                    Twitter Circle
                  </li>
                </ul>
              )}
            </div>
        </div>}
        <div onClick={handleDivClick} className="tweetBox__input">
          <input
            placeholder="What's happening?"
            type="text"
          />
        </div>
        {showDivs && <div className="audience2">
          <div className="select-box2" onClick={() => setShowOptions2(!showOptions2)}>
            <div className="selected-value2">{selectedValue2}{" >"}</div>
              {showOptions2 && (
                <ul className="options2">
                  <li className="option02">
                    <p className="bold">
                    Who can reply? <br/>
                    </p>
                    <p className="not-bold">
                      Choose who can reply to this Tweet.<br/>
                      Anyone mentioned can always reply.
                    </p>
                  </li>
                  <li className="option2" onClick={() => handleClick2("Everyone can reply")}>
                    Everyone
                  </li>
                  <li
                    className="option2"
                    onClick={() => handleClick2("People you follow can reply")}
                  >
                    People you follow
                  </li>
                  <li
                    className="option2"
                    onClick={() => handleClick2("Only people you mention can reply")}
                  >

                    Only people you mention
                  </li>
                </ul>
              )}
            </div>
        </div>}
        <div className="att">
          <div className="attachements">
            <ImageIcon />
            <GifIcon />
            <PollIcon />
            <EmojiIcon />
            <ScheduleIcon />
            <LocationIcon />
          </div>
          <Button
            type="submit"
            className="tweetBox__tweetButton"
          >
            <span>Tweet</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
