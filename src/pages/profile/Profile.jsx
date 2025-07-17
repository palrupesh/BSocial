import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/leftsidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feedbar from "../../components/feed/Feedbar";
import "./profile.css";

export default function Profile() {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">

                            <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt="" />
                            <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt="" />
                        </div>
                        <div className="profileInfo">

                            <h4 className="profileInfoName">Rupesh pal</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">

                        <Feedbar />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
