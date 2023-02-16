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
      <div className="search-bar">
        <div className="trends__input">
          <SearchIcon className="trends__searchIcon" />
          <input className="trends__input__input" placeholder="Search Twitter" type="text" />
        </div>
      </div>

      <div className="trendsContainer">
        <h2>Trends for you</h2>
      <div className="hashContainer1">
        <Hash />
        <Hash />
        <Hash />
        <Hash />
        <Hash />
        <Hash />
        <Hash />
        <Hash />
        <Hash />

      </div>







      </div>
      <div className="footer">

        <a href="">Terms of Service </a>
        <a href="">Privacy Policy</a>
        <a href="">Cookie Policy</a>
        <a href="">Accessibility</a>
        <a href="">Ads info</a>
        <a href="">More...</a>
        <span>© 2023 Twitter, Inc.</span>
      </div>

    </div>
  );
}

export default Trends;
