import './online.css';

export default function Online({ userData }) {

    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={userData.profilePicture} alt="" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{userData.userName}</span>
        </li>
    )
}