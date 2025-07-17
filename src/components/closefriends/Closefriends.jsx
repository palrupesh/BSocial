import "./closefriends.css";

export default function Closefriends({ userData }) {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={PF+userData.profilePicture} alt="friendImg" />
            <span className="sidebarFriendName">{userData.userName}</span>
        </li>
    )
}
