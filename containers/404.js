import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "config";

export default class NotFound extends Component {
    componentDidMount() {
        document.body.classList.add("page-404");
    }

    componentWillUnmount() {
        document.body.classList.remove("page-404");
    }
    render() {
        return (
            <section className="main">
                <div className="block-404">
                    <div className="image-404">
                        <img
                            src={config.baseName + "/client/images/robot.png"}
                        />
                    </div>
                    <div className="error-block">
                        <h1>404</h1>
                        <h3>Looks like you're lost</h3>
                        <p className="error-message">
                            The page you are looking for is not available!
                        </p>
                        <p className="go-home">
                            <Link to="/">GO TO HOME →</Link>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
