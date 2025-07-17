import './online.css';

export default function Online({ userData }) {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={PF+userData.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{userData.userName}</span>
        </li>
    )
}