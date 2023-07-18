import React, { Component } from "react";

export class HeaderLink extends Component {
  render() {
    return (
      <>
        {this.props.linkLI.map((el,index) => {
          return (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href={el.urLinks}>
                {el.LinkName}
              </a>
            </li>
          );
        })}
      </>
    );
  }
}
export default HeaderLink;
