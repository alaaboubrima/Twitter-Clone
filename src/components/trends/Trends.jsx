import React from "react";
import Hash from "./Hash";
import "./Trends.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Trends() {
  return (
    <div className="trends">
      <div className="trends__input">
        <SearchIcon className="trends__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="trendsContainer">
        <h2>Trends for you</h2>
      <div className="hashContainer1">
        <Hash />
        <Hash />
        <Hash />
      </div>

        <TwitterTweetEmbed tweetId={"1622744148414545920"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Trends;
