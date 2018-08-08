import React from "react";
import moment from "moment";
import Dotdotdot from "react-dotdotdot";
import { Link } from "react-router-dom";

export default ({ post, href }) => {
    return (
        <div className="item">
            <div className="card">
                <article className="post">
                    <div className="post-header">
                        <div className="post-meta">
                            {moment(new Date(post.published_at)).format("LL")}
                        </div>
                        <h2 className="post-title font-alt">
                            <Link to={href}>{post.title}</Link>
                        </h2>
                    </div>
                    <div className="post-content">
                        <Dotdotdot clamp={"70px"}>{post.excerpt}</Dotdotdot>
                    </div>
                    <div className="post-footer">
                        <Link className="post-more" to={href}>
                            Read more
                        </Link>
                    </div>
                </article>
            </div>
        </div>
    );
};
