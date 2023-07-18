import React, { Component } from "react";
import logo from "../commonResource/images/icons/logo-sm.png";
import search from "../commonResource/images/icons/search-icon-sm.png";
import cart from "../commonResource/images/icons/cart-sm.png";
import HeaderLink from "./HeaderLink";

class Header extends Component {
  render() {
    const appleList = [
      {
        LinkName: "Mac",
        urLinks: "mac",
      },
      {
        LinkName: "iPhone",
        urLinks: "iPhone",
      },
      {
        LinkName: "iPad",
        urLinks: "ipad",
      },
      {
        LinkName: "Watch",
        urLinks: "watch",
      },
      {
        LinkName: "Tv",
        urLinks: "tv",
      },
      {
        LinkName: "Music",
        urLinks: "music",
      },
      {
        LinkName: "Support",
        urLinks: "support",
      },
      {
        LinkName: <img src={cart} />,
        urLinks: "cart",
      },
      {
        LinkName: <img src={search} />,
        urLinks: "search",
      },
    ];
    {
      return (
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <a className="navbar-brand mx-auto" href="/">
                <img src={logo} />
              </a>
              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <HeaderLink linkLI={appleList} />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      );
    }
  }
}
export default Header;
