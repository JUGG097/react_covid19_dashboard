import React from "react";
import { Bar } from "react-chartjs-2";

const BarCharts = ({ confirmedCases, activeCases, deaths, recovered }) => {
	// console.log(confirmedCases);
	const state = {
		labels: ["Confirmed Cases", "Active Cases", "Death", "Recovered"],
		datasets: [
			{
				label: "Cases Count",
				backgroundColor: ["#B21F00", "#C9DE00", "#00A6B4", "#2FDE00"],
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				color: "white",
				data: [confirmedCases, activeCases, deaths, recovered],
			},
		],
	};

	return (
		<div>
			<Bar
				data={state}
				height={300}
				// width={"250px"}

				options={{
					mainAspectRatio: false,
					title: {
						display: true,
						text: "Average Rainfall per month",
						fontSize: 20,
						color: "white",
					},
					legend: {
						display: true,
						position: "right",
						color: "white",
					},
				}}
			/>
		</div>
		// <div
		// 	className="chart-container"
		// 	style={{ position: "relative", height: "300px", width: "300px" }}
		// >
		// 	{" "}
		// 	<Bar
		// 		data={state}
		// 		height={"300px"}
		// 		width={"250px"}
		// 		options={{
		// 			mainAspectRatio: false,
		// 			title: {
		// 				display: true,
		// 				text: "Average Rainfall per month",
		// 				fontSize: 20,
		// 				fontColor: "white",
		// 			},
		// 			legend: {
		// 				display: true,
		// 				position: "right",
		// 			},
		// 		}}
		// 	/>{" "}
		// </div>
	);
};

export default BarCharts;
