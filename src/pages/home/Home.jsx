import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/leftsidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feedbar from "../../components/feed/Feedbar";
import "./home.css";


export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feedbar />
                <Rightbar />
            </div>
        </>
    )
}