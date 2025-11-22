import React from "react";
import { Bookmark } from "lucide-react";

const Card2 = () => {
    return (
        <div className="card2">
            <div>
                <div className="top">
                    <img src="data:image/png;base64,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" alt="" />
                    <button><Bookmark /> Save </button>
                </div>
                <div className="center">
                    <h3>Amazon <span>3 days to go </span></h3>
                    <h2>Senior developer </h2>

                    <div className="tag">
                        <h4>part time</h4>
                        <h4>Full time</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>$120 per hour</h3>
                    <p>Mumbai, India</p>
                </div>
                <button>Apply Now</button>
            </div>

        </div>
    )
}


export default Card2;