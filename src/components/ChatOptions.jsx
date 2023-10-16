import React from "react";
import ImageIcon from '@mui/icons-material/Image';

export default function ChatOptions({name}){
    return (
        <div className="chatList">
        <div className="chatlist">
            <div>
                <ImageIcon className="pic"/>
            </div>
            <div className="chatTitle">
            <a>
            <div>
            <h3>
            {name}
            </h3>
            </div>
            <p>
                Previous Message
            </p>
            </a>
            </div>
        </div>
        </div>
    )
    }