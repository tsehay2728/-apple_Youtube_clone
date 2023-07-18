import React, { Component } from "react";
class FooterLink extends Component {
  render() {
    return (
      <>
        {this.props.footeritems.map((element, index) => {
          return (
            <li key={index}>
              <a href="#">{element}</a>
            </li>
          );
        })}
      </>
    );
  }
}
export default FooterLink;
