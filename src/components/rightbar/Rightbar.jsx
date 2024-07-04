import "./rightbar.css";
import Online from "../online/Online";
import { users } from "../../dummyData";

export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today

                    </span>
                </div>

                <img src="assets/ad.png" alt="" className="rightbarAd" />

                <h4 className="rightbarTitle">Online Friends </h4>
                <ul className="rightbarFriendList">
                    {users.map(userData => (
                        <Online key={userData.id} userData={userData} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfovalue">New Delhi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfovalue">UP56</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfovalue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rocky</span>
                    </div>
                </div>

                <img src="assets/ad.png" alt="" className="rightbarAd" />
            </>
        )
    }


    return (
        <div className="right_bar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
