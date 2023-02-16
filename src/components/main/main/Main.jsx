import React, { useState, useEffect } from "react";
import TweetBox from "../tweet-box/TweetBox";
import Post from "../post/Post";
import "./Main.css";

function Main() {


    return (
        
        <div className="main">
            <div className="main__header">
                <h2>Home</h2>
                <div className="following">
                    <div id="f1">
                        <div>For you</div>
                    </div>
                    <div id="f2">
                        <div>Following</div>
                    </div>
                </div>
                
            </div>

            <TweetBox />

                <Post likes={1} liked={true}/>
                <Post likes={12} liked={true} image="https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif"/>
                <Post likes={15} liked={true} />
                <Post likes={8} liked={true}/>
                <Post likes={2} liked={true}/>

        </div>
    );
}

export default Main;