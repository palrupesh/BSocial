import "./sidebar.css";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutlineOutlined, Work, Event, School } from "@mui/icons-material";
import Closefriends from "../closefriends/Closefriends";
import { users } from "../../dummyData";

export default function Sidebar() {
    return (
        <div className="side_bar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutlineOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show Me</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">

                    {users.map(userData => (
                        <Closefriends key={userData.id} userData={userData} />
                    ))}

                </ul>
            </div>
        </div>
    )
}
