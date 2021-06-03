import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.myheader}>
			<nav className="navbar">
				<a className="navbar-brand" href>
					Nigeria Covid-19 Cases Data
				</a>
				<a
					className="nav"
					href="https://covid19.ncdc.gov.ng/"
					target="_blank"
					rel="noreferrer"
				>
					NCDC
				</a>
			</nav>
		</div>
	);
};

export default Header;
