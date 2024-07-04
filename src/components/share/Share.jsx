import "./share.css";
import { PermMedia, Label, LocationOn, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="assets/person/1.jpeg" alt="" />
                    <input type="text" placeholder="What's in your mind people"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or video</span>
                        </div>

                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>

                        <div className="shareOption">
                            <LocationOn htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>

                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <div className="button">

                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
