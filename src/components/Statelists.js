import React from "react";
import styles from "./Statelists.module.css";

const Statelists = ({ count, state, name, color }) => {
	return (
		<div className={styles.statelists}>
			<p
				style={{
					color: color,
					margin: 0,
				}}
			>
				{count} {name}
			</p>
			<p
				style={{
					margin: 0,
				}}
			>
				{state}, Nigeria
			</p>
		</div>
	);
};

export default Statelists;
