import React from "react";
import Totalcards from "./Totalcards";
import Statelists from "./Statelists";

const Confirmedcases = ({ data, count }) => {
	const name = "Confirmed";

	const dataLists = data;
	return (
		<div
			className="m-1"
			style={{
				backgroundColor: "#222222",
			}}
		>
			<Totalcards name={name} count={count} color="red" />
			{dataLists.map((datalet) => (
				<Statelists
					count={datalet.number}
					state={datalet.state}
					name={name}
					color="red"
				/>
			))}
		</div>
	);
};

export default Confirmedcases;
