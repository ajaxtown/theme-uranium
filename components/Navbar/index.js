import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuVertical from "./MenuVertical";
import About from "../Sidebar/About";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navbarToggle = this.navbarToggle.bind(this);
        this.state = {
            navbarOpen: false
        };
    }

    navbarToggle() {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        let navbarStatus = this.state.navbarOpen ? " in" : "";

        return (
            <div className={"custom-menu"}>
                <MenuVertical
                    menu={JSON.parse(this.props.settings.menu.value)}
                    router={this.props.router}
                />
            </div>
        );
    }
}

export default Navbar;
