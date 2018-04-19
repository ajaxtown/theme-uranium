import React, { Component } from "react";
import ArticleListItem from "../components/Post/ArticleListItem";
import Loader from "client/helpers/Loader";
import config from "../../../../config";
import Paginate from "client/helpers/Paginate";
import OhSnap from "client/helpers/OhSnap";
import WithResize from "./Hoc/WithResize";
import PostsData from "shared/data-connectors/PostsData";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.page = 1;
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        document.body.classList.add("posts-page");
        this.props.setResizeTracker(".post-grid");
    }

    componentWillUnmount() {
        document.body.classList.remove("posts-page");
    }
    async loadMore(num) {
        let result = await this.props.fetchMore({
            type: "post_category",
            slug: this.props.slug || this.props.match.params.slug,
            postType: "post",
            limit: config.itemsPerPage,
            offset: (num - 1) * config.itemsPerPage
        });
        this.page = num;
    }

    render() {
        if (this.props.loading) {
            return <Loader />;
        }
        if (!this.props.posts) {
            return (
                <OhSnap message={this.props.settings.search_notFound.value} />
            );
        }
        if (this.props.posts.length === 0) {
            return (
                <OhSnap message={this.props.settings.text_posts_empty.value} />
            );
        }
        let windowWidth = this.props.clientWidth;
        let gridWidth = "50%";
        if (windowWidth < 600) {
            gridWidth = "100%";
        }

        const posts = this.props.posts.map((post, i) => {
            return <ArticleListItem idx={i} key={i} post={post} />;
        });

        return (
            <Paginate
                data={posts}
                count={this.props.total}
                page={this.page}
                loadMore={this.loadMore}
            />
        );
    }
}

export default PostsData(WithResize(Posts));
