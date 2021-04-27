import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.myheader}>
			<nav className="navbar">
				<a className="navbar-brand" href>
					Covid Dashboard | Nigeria
				</a>
				<a className="navbar-brand ml-auto" href>
					NCDC
				</a>
			</nav>
		</div>
	);
};

export default Header;
