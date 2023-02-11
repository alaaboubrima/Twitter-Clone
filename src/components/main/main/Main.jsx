import React, { useState, useEffect } from "react";
import TweetBox from "../tweet-box/TweetBox";
import Post from "../post/Post";
import "./Main.css";

function Main() {


    return (
        
        <div className="main">
            <div className="main__header">
                <h2>Home</h2>
                
            </div>
            <div className="following">
                <div id="f1">
                    <div>For you</div>
                </div>
                <div id="f2">
                    <div>Following</div>
                </div>
            </div>

            <TweetBox />

                <Post/>
                <Post/>
                <Post/>
        </div>
    );
}

export default Main;