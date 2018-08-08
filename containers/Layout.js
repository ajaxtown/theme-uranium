import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "client/helpers/Search";
import Header from "../components/Header";

if (typeof window !== "undefined") {
    require("intersection-observer");
}
require("../public/pcss/client.pcss");

export default function Layout(Element, props) {
    const settings = props.settings;

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                sidebarOpen: true
            };
            this.mounted = false;
            this.sidebarToggle = this.sidebarToggle.bind(this);
            this.onResize = this.onResize.bind(this);
        }
        componentWillMount() {
            this.mounted = true;
            if (typeof window !== "undefined") {
                window.addEventListener("resize", this.onResize);
                this.onResize();
            }
        }
        componentWillUnmount() {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", this.onResize);
            }
        }
        onResize() {
            if (!this.mounted) return false;
            if (document.body.clientWidth < 991) {
                this.setState({ sidebarOpen: false });
            } else {
                this.setState({ sidebarOpen: true });
            }
        }
        sidebarToggle() {
            this.setState({ sidebarOpen: !this.state.sidebarOpen });
        }
        render() {
            const _props = { ...this.props, ...props, settings };
            const classes = this.state.sidebarOpen ? "" : " collapsed";
            return (
                <div className={"main two-column" + classes}>
                    <Header
                        sidebarToggle={this.sidebarToggle}
                        settings={settings}
                    />
                    <nav className="navbar navbar-custom">
                        <div className="sidebar">
                            <div className="about-site">
                                {/* some content about the site*/}
                            </div>

                            <Search history={_props.history} />

                            <Navbar
                                settings={settings}
                                position="left"
                                router={{ ...this.props }}
                            />
                            <Footer data={settings.site_footer.value} />
                        </div>
                    </nav>
                    <main>
                        <div className="content-area">
                            <Element {..._props} />
                        </div>
                    </main>
                </div>
            );
        }
    };
}
