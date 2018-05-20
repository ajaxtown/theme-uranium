import React, { Component } from "react";
import { Link } from "react-router-dom";

const SocialIcons = ({ settings }) => {
    return (
        Object.keys(settings)
            // get all the settings with start with "social_"
            .filter(
                setting =>
                    setting.indexOf("social_") === 0 &&
                    settings[setting].value.length > 0
            )
            .map(setting => {
                const icon = "fa fa-" + setting.split("_")[1];
                return (
                    <a
                        key={setting}
                        target="_blank"
                        href={settings[setting].value}
                        title={setting}
                    >
                        <i className={icon} />
                    </a>
                );
            })
    );
};

class Header extends Component {
    render() {
        const settings = this.props.settings;
        const logo = settings.site_logo.value || null;
        return (
            <header>
                <div className="left-side">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        onClick={this.props.sidebarToggle}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand brand" to="/">
                        {logo && (
                            <img
                                className="avatar"
                                src={settings.site_logo.value}
                                alt="Avatar"
                            />
                        )}
                        {!logo && settings.site_title.value}
                    </Link>
                </div>
                <div className="right-side">
                    <div className="social-icons">
                        <SocialIcons settings={settings} />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
