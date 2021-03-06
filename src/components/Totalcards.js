import React from "react";
import styles from "./Totalcards.module.css";

const Totalcards = ({ name, count, color }) => {
	// const name = "Confirmed";
	// const count = 12000;
	// console.log(Number(count).toLocaleString());
	return (
		<div className={styles.Totalcards}>
			<p
				style={{
					fontSize: "1.5rem",
				}}
			>
				Total {name}
			</p>
			<p
				style={{
					color: color,
					fontSize: "2rem",
				}}
			>
				{Number(count).toLocaleString()}
			</p>
		</div>
	);
};

export default Totalcards;
