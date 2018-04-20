import React, { Component } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "../../components/Sidebar/Search";

require("../../public/pcss/client.pcss");

export default function Layout(Element, props) {
    const settings = props.settings;
    const layout = settings.layout_display.value;

    return class extends Component {
        render() {
            const _props = { ...this.props, ...props, settings };
            return (
                <div className="main two-column">
                    <nav className="navbar navbar-custom">
                        <div className="sidebar">
                            <Navbar
                                settings={settings}
                                position="left"
                                router={{ ...this.props }}
                            />
                            <Footer data={settings.site_footer.value} />
                        </div>
                    </nav>
                    <main>
                        <Search history={_props.history} />
                        <div className="content-area">
                            <Element {..._props} />
                        </div>
                    </main>
                </div>
            );
        }
    };
}
