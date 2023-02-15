import React from 'react'
import IMAGES from "../../assets/images.jsx"
import SideBarItem from './side-bar-items/SideBarItem';
import TwitterIcon from "@material-ui/icons/Twitter";
import {Tweet} from "../../assets/icons/icons"
import "./side-bar-items/SideBarItem.css"

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        <TwitterIcon className="twitterIcon" />

        <SideBarItem active icon={IMAGES.home_active} />
        <SideBarItem icon={IMAGES.hash} />
        <SideBarItem icon={IMAGES.notification} />
        <SideBarItem icon={IMAGES.message} />
        <SideBarItem icon={IMAGES.save} />
        <SideBarItem icon={IMAGES.list} />
        <SideBarItem icon={IMAGES.profile} />
        <SideBarItem icon={IMAGES.more} />

        <Tweet className="sidebar__img tweet" />

      </div>

    </div>
  );
}

export default SideBar;