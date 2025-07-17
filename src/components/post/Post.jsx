import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { users } from "../../dummyData";
import { useState } from "react";


export default function Post({ post }) {
    const [like, setLike] = useState(post.like);
    const [isliked, setisLiked] = useState(false);
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;

    function handleClick() {
        setLike(isliked ? like - 1 : like + 1);
        setisLiked(!isliked);
    }

    const user = users.filter(u => u.id === post.userId)[0];
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={PF+user.profilePicture} alt="" />
                        <span className="postUserName">{user.userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.photo} alt="photo" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        {/* <div onClick={() => setLike((like) => like + 1)}> */}
                        <img className="likeIcon" src={`${PF}/like.png`} onClick={handleClick} alt="" />
                        <img className="likeIcon" src={`${PF}/heart.png`} onClick={handleClick} alt="" />
                        {/* </div> */}
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
