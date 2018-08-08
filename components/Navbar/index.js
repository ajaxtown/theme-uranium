import React, { Component } from "react";
import MenuVertical from "./MenuVertical";

class Navbar extends Component {
    state = {
        navbarOpen: false
    };

    navbarToggle = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    };

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
