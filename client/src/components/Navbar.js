import React from "react";

class Navbar extends React.Component {
  static defaultProps = {
    title: "haha",
    header: true,
  };

  render() {
    return (
      <div>
        {this.props.header ? <h1>{this.props.title}</h1> : this.props.title}
      </div>
    );
  }
}
export default Navbar;
