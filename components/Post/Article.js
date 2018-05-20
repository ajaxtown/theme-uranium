import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import config from "config";
import Disqus from "disqus-react";

export default class Article extends Component {
    componentDidMount() {
        setTimeout(() => {
            document.querySelectorAll(".hljs").forEach(hljs.highlightBlock);
        }, 10);
    }
    render() {
        const tags = [];
        const categories = [];
        const post = this.props.post;

        const disqusShortname = this.props.settings.disqus_id.value;
        const disqusConfig = {
            url: post.url,
            identifier: post.id,
            title: post.title
        };

        post.taxonomies.forEach((taxonomy, i) => {
            if (taxonomy.type === "post_category") {
                categories.push(
                    <Link key={i} to={"/category/" + taxonomy.slug}>
                        {taxonomy.name}
                    </Link>
                );
            } else {
                tags.push(
                    <Link key={i} to={"/tag/" + taxonomy.slug}>
                        #{taxonomy.name}
                    </Link>
                );
            }
        });
        const content = post.mode == "markdown" ? post.mdPreview : post.body;
        const displayAuthor = JSON.parse(
            this.props.settings.displayAuthorInfo.value
        ); // convert "true" to true

        return (
            <div>
                <div className="post-thumbnail">
                    {post.cover_image.length > 0 && (
                        <img
                            width="100"
                            src={config.baseName + post.cover_image}
                            alt={this.props.title}
                        />
                    )}
                </div>
                <div className="card">
                    <article className="post">
                        <div className="post-header">
                            <h2 className="post-title font-alt">
                                <Link to="#">{post.title}</Link>
                            </h2>
                            <div className="post-meta">
                                {moment(new Date(post.created_at)).format("LL")}
                                {tags.length > 0 && (
                                    <div className="tags font-serif  p-t-30">
                                        {tags}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="post-content ql-editor fs-medium">
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: content
                                }}
                            />
                        </div>
                        <div className="tags font-serif  p-t-30">
                            {categories}
                        </div>
                        {displayAuthor &&
                            post.type == "post" && (
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <img
                                            src={
                                                config.baseName +
                                                post.author.avatar
                                            }
                                        />
                                    </div>
                                    <div className="author-details">
                                        <div className="author-name">
                                            {post.author.fname}{" "}
                                            {post.author.lname}
                                        </div>
                                        <div className="author-bio">
                                            {post.author.bio}
                                        </div>
                                    </div>
                                </div>
                            )}
                        {this.props.adjacentPosts}
                        {disqusShortname &&
                            post.type == "post" && (
                                <div id="disqus_thread_parent">
                                    <Disqus.DiscussionEmbed
                                        shortname={disqusShortname}
                                        config={disqusConfig}
                                    />
                                </div>
                            )}
                    </article>
                </div>
            </div>
        );
    }
}
