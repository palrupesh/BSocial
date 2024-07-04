import "./topbar.css";
import { Person, Search, ChatBubble, Notifications } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo"> B Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatBubble />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>

                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}