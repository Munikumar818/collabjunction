import React from "react";
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageIcon from '@mui/icons-material/Image';
import zIndex from "@mui/material/styles/zIndex";

export default function Chat(){
    const chats=["chatdkljfhaslkjfhskjlfhadskjlfhaskljfh1","chat2 is doing a test in this case","chat3"];
    return (
        <div className="Chatbox">
       
        <div className="details">
        <div>
        <ImageIcon className="pic"/>
        </div>
        <div className="chatheading">
        <h2>Name</h2>
        <p> position</p>
        </div>
        <div className="more">
        <MoreVertIcon/>
        </div>
        </div>

        <div className="chats">
        {
            chats.map(c=> <p className="chatbubble1">{c}</p>
            )
        }
        <p className="chatbubble2"> chat from the opposite side</p>
        </div>

        <div className="edit">
        <input type="text" placeholder="text"></input>
            <SendIcon className="sendicon"/>
        </div>
            
        </div>
    )
}