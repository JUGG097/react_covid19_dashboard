import React from "react";
import { Bar } from "react-chartjs-2";

const BarCharts = ({ confirmedList }) => {
	const statelist = confirmedList.map((listes) => listes.state);
	const confirmedCaseslist = confirmedList.map((listes) =>
		// parseInt(listes.number)
		parseInt(listes.number.replace(/,/g, ""))
	);
	console.log(confirmedCaseslist);
	const state = {
		// labels: [
		// 	"January",
		// 	"February",
		// 	"March",
		// 	"April",
		// 	"May",
		// 	"January",
		// 	"February",
		// 	"March",
		// 	"April",
		// 	"May",
		// 	"January",
		// 	"February",
		// 	"March",
		// 	"April",
		// 	"May",
		// ],
		labels: statelist,
		datasets: [
			{
				label: "Confirmed Cases",
				backgroundColor: "red",
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: confirmedCaseslist,
			},
		],
	};

	return (
		<div>
			<Bar
				height="400px"
				width="300px"
				data={state}
				options={{
					title: {
						display: true,
						text: "Average Rainfall per month",
						fontSize: 20,
					},
					legend: {
						display: true,
						position: "right",
					},
				}}
			/>
		</div>
	);
};

export default BarCharts;
