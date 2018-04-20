import React, { Component } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "client/helpers/Search";

require("../../public/pcss/client.pcss");

export default function Layout(Element, props) {
    const settings = props.settings;
    const layout = settings.layout_display.value;

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
                    <header>
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            onClick={this.sidebarToggle}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link className="navbar-brand brand" to="/">
                            {settings.site_title.value}
                        </Link>
                    </header>
                    <nav className="navbar navbar-custom">
                        <div className="sidebar">
                            <div className="about-site">
                                {_props.settings.sidebar_about.value}
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
