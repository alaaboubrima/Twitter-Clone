import React from "react";
import IMAGES from "../../../assets/images";
import "./SideBarItem.css";

function SideBarItem({ active, icon }) {
    return (
        <div className={`sidebar__item ${active && "sidebar__item--active"}`}>
            <img className={`sidebar__img ${icon === IMAGES.tweet ? "tweet" : 0}`} src={icon} />
        </div>
    );
}

export default SideBarItem;