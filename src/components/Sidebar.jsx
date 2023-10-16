import react from "react";
import ImageIcon from '@mui/icons-material/Image';
import ChatOptions from "./ChatOptions";

export default function Sidebar(){
    const names=['Name','Name1'];
    return(
        <div className="chat">
        <div className="InboxTitle"><h1>--Inbox</h1>
        </div>
        <div className="InboxMessages"><h2>-Messages</h2>
        </div>

        <div>
            <button> <ChatOptions name={names[0]}/></button>
        </div>
        <div className="line"></div>
        <div>
            <button><ChatOptions name={names[1]}/></button>
        </div>
        
       
        </div>
    )
}



// <table>
// <tr>
//     <td><ImageIcon className="pic"/></td>
//     <td >
//     <button>
//     <div className="chatOption">
//     <div className="chatTitle"><h3>{names[0]}</h3></div>
//     <div className="preview">
//         <p>preview of the message</p>
//     </div>
//     </div>
//     </button>
    
//     </td>
// </tr>
// </table>