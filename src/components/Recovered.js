import React from "react";
import Totalcards from "./Totalcards";
import Statelists from "./Statelists";

const Recovered = ({ data, count }) => {
	const name = "Recovered";

	const dataLists = data;
	return (
		<div
			className="m-1"
			style={{
				backgroundColor: "#222222",
			}}
		>
			<Totalcards name={name} count={count} color="#70A800" />
			{dataLists.map((datalet) => (
				<Statelists
					count={datalet.number}
					state={datalet.state}
					name={name}
					color="#70A800"
				/>
			))}
		</div>
	);
};

export default Recovered;
