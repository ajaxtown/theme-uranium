import React, { Component } from "react";
import Article from "../components/Post/Article";
import Loader from "client/helpers/Loader";
import SEO from "client/helpers/SEO";
import OhSnap from "client/helpers/OhSnap";
import SinglePageData from "shared/data-connectors/SinglePageData";

class SinglePage extends Component {
    componentDidMount() {
        document.body.classList.add("single single-page");
    }

    componentWillUnmount() {
        document.body.classList.remove("single single-page");
    }
    render() {
        if (this.props.loading) {
            return <Loader />;
        }
        if (!this.props.page.ok) {
            return (
                <OhSnap message="Sorry, this page does not exist or might be restricted." />
            );
        }
        const post = this.props.page.post;
        const tags = [],
            categories = [];
        post.taxonomies.forEach(taxonomy => {
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
                    title={post.title}
                    description={post.excerpt}
                    path={"/post/" + this.props.match.params.slug}
                    contentType="article"
                    category={categories.join(",")}
                    tags={tags}
                    image={post.cover_image}
                    settings={this.props.settings || {}}
                />
                <Article post={post} />
            </div>
        );
    }
}

export default SinglePageData(SinglePage);
