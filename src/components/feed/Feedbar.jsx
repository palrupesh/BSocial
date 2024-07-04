import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function feed() {
    return (
        <div className="feed_bar">
            <div className="feedWrapper">
                <Share />
                {Posts.map((data) => (
                    <Post key={data.id} post={data} />
                ))}


            </div>
        </div>
    )
}
