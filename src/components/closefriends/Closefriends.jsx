import "./closefriends.css";

export default function Closefriends({ userData }) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={userData.profilePicture} alt="friendImg" />
            <span className="sidebarFriendName">{userData.userName}</span>
        </li>
    )
}
