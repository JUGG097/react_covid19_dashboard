import React from "react";
import Totalcards from "./Totalcards";
import Statelists from "./Statelists";

const Confirmedcases = ({ data, count }) => {
	const name = "Confirmed";

	const dataLists = data;
	return (
		<div className="m-1" style={{}}>
			<Totalcards
				style={{
					backgroundColor: "#222222",
				}}
				name={name}
				count={count}
				color="red"
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
						color="red"
					/>
				))}
			</div>
		</div>
	);
};

export default Confirmedcases;
