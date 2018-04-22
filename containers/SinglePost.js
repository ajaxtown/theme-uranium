import React, { Component } from "react";
import PropTypes from "prop-types";
import Article from "../components/Post/Article";
import AdjacentPosts from "../components/Post/AdjacentPosts";
import Loader from "client/helpers/Loader";
import SEO from "client/helpers/SEO";
import OhSnap from "client/helpers/OhSnap";
import SinglePostData from "shared/data-connectors/SinglePostData";

class SinglePost extends Component {
    componentDidMount() {
        document.body.classList.add("single", "single-post");
    }

    componentWillUnmount() {
        document.body.classList.remove("single", "single-post");
    }
    render() {
        if (this.props.loading || this.props.adjPostsLoading) {
            return <Loader />;
        }
        if (this.props.post === null) {
            return (
                <OhSnap message="Sorry, this page does not exist or might be restricted." />
            );
        }
        const tags = [],
            categories = [];
        this.props.post.taxonomies.forEach(taxonomy => {
            if (taxonomy.type === "post_category") {
                categories.push(taxonomy.name);
            } else {
                tags.push(taxonomy.name);
            }
        });

        return (
            <div>
                <SEO
                    schema="BlogPosting"
                    title={this.props.post.title}
                    description={this.props.post.excerpt}
                    path={"/post/" + this.props.match.params.slug}
                    contentType="article"
                    category={categories.join(",")}
                    tags={tags}
                    image={this.props.post.cover_image}
                    settings={this.props.settings || {}}
                />
                <Article post={this.props.post} />
                <AdjacentPosts slug={this.props.post.slug} />
            </div>
        );
    }
}

SinglePost.propTypes = {
    post: PropTypes.object
};
export default SinglePostData(SinglePost);
