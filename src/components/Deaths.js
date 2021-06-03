import React from "react";
import Totalcards from "./Totalcards";
import Statelists from "./Statelists";

const Deaths = ({ data, count }) => {
	const name = "Deaths";

	const dataLists = data;
	return (
		<div className="m-1" style={{}}>
			<Totalcards
				name={name}
				count={count}
				color="white"
				style={{
					backgroundColor: "#222222",
				}}
			/>
			<div
				style={{
					height: "400px",
					overflowY: "scroll",
					backgroundColor: "#222222",
					borderRadius: "10px",
				}}
				id="scrollStyle1"
			>
				{dataLists.map((datalet) => (
					<Statelists
						count={datalet.number}
						state={datalet.state}
						name={name}
						color="white"
					/>
				))}
			</div>
		</div>
	);
};

export default Deaths;
