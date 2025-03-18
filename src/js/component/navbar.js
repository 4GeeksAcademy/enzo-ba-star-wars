import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 flex-items-center">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg"
					alt="Star Wars Logo"
					className="h-6 w-auto cursor-pointer"
					style={{ height: "40px", width: "auto" }}
				/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
