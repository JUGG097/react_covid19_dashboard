import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
	let d = new Date();
	let yearDate = d.getFullYear();

	return (
		<div className={styles.footer_container} style={{}}>
			<div className="row mt-4">
				<div className="col-sm-12 text-center">
					<span>
						<a href="https://github.com/JUGG097/react_covid19_dashboard">
							<FaGithub
								style={{
									color: "white",
									fontSize: "1.5rem",
								}}
							/>{" "}
						</a>{" "}
					</span>
					<span className="mr-4 ml-4">
						<a href="https://www.linkedin.com/in/adeoluwa-adeboye-051057146/">
							<FaLinkedin
								style={{
									color: "#0e76a8",
									fontSize: "1.5rem",
								}}
							/>{" "}
						</a>{" "}
					</span>
					<span>
						<a href="https://twitter.com/adeneye97">
							<FaTwitter
								style={{
									color: "#1DA1F2",
									fontSize: "1.5rem",
								}}
							/>{" "}
						</a>{" "}
					</span>{" "}
				</div>{" "}
			</div>{" "}
			<div className="row mt-3">
				<div
					className="col-sm-12 text-center"
					style={{
						color: "white",
					}}
				>
					<p> Adeoluwa | Copyright &copy; {yearDate} </p>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};

export default Footer;
