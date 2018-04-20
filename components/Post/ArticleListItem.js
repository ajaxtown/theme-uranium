import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dotdotdot from "react-dotdotdot";
import moment from "moment";
import LazyLoad from "./LazyLoad";

class ArticleListItem extends Component {
    render() {
        const post = this.props.post;
        let href = `/${post.type}/${post.slug}`;
        return (
            <div className="item">
                {post.cover_image && (
                    <div className="post-thumbnail">
                        <Link to={href}>
                            <img
                                className="lazy-image"
                                data-src={post.cover_image}
                                alt={this.props.title}
                                src="/uploads/loading.jpg"
                            />
                        </Link>
                    </div>
                )}
                <div className="card">
                    <article className="post">
                        <div className="post-header">
                            <div className="post-meta">
                                {moment(new Date(post.created_at)).format("LL")}
                            </div>
                            <h2 className="post-title font-alt">
                                <Link to={href}>{post.title}</Link>
                            </h2>
                        </div>
                        <div className="post-content">
                            <Dotdotdot clamp={"70px"}>{post.excerpt}</Dotdotdot>
                        </div>
                        <div className="post-footer">
                            <div className="post-author">
                                {post.author.avatar && (
                                    <div className="post-avatar">
                                        <img src={post.author.avatar} />
                                    </div>
                                )}
                                <span className="author-name">
                                    {post.author.fname} {post.author.lname}
                                </span>
                            </div>

                            <Link className="post-more" to={href}>
                                Read more
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default LazyLoad(ArticleListItem);
