import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return "";
			case false:
				return <a href="/auth/google">LOGIN WITH GOOGLE</a>;
			default:
				const name = this.props.auth.name;
				return [
					<li key="4" style={{ margin: "0 50px" }}>
						Credits: {this.props.auth.credits}
					</li>,

					<li key="1">
						<Payments />{" "}
					</li>,
					<li key="2" style={{ margin: "0 10px" }}>
						<b>Welcome {name}!</b>
					</li>,
					<li key="3">
						<a href="/api/logout">LOGOUT</a>
					</li>,
				];
		}
	}
	render() {
		// console.log(this.props.auth);
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						className="left brand-logo"
						to={this.props.auth ? "/surveys" : "/"}
					>
						Emaily
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}
export default connect(mapStateToProps)(Header);
