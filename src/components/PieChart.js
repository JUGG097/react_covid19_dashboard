import React from "react";

import Chart from "react-apexcharts";

const PieChart = ({ confirmedCases, activeCases, deaths, recovered }) => {
	const state = {
		// labels: ["Active Cases (%)", "Death (%)", "Recovered (%)"],
		// datasets: [
		// 	{
		// 		label: "Cases Percent",
		// 		backgroundColor: ["#C9DE00", "#00A6B4", "#2FDE00"],
		// 		borderColor: "rgba(0,0,0,1)",
		// 		borderWidth: 2,
		// 		data: [
		// 			(activeCases * 100) / confirmedCases,
		// 			(deaths * 100) / confirmedCases,
		// 			(recovered * 100) / confirmedCases,
		// 		],
		// 	},
		// ],
		// options: {
		// 	// chart: {
		// 	// 	id: "basic-donut",
		// 	// },
		// 	// xaxis: {
		// 	// 	categories: ["Active Cases", "Recovered", "Deaths"],
		// 	// },
		// },
		// series: [
		// 	{
		// 		data: [
		// 			(activeCases * 100) / confirmedCases,
		// 			(deaths * 100) / confirmedCases,
		// 			(recovered * 100) / confirmedCases,
		// 		],
		// 	},
		// ],
		// labels: ["Active Cases", "Recovered", "Deaths"],
		options: {},
		series: [
			(activeCases * 100) / confirmedCases,
			(deaths * 100) / confirmedCases,
			(recovered * 100) / confirmedCases,
		],
		labels: ["Active Cases", "Recovered", "Deaths"],
	};

	return (
		<div>
			<Chart
				options={state.options}
				series={state.series}
				labels={state.labels}
				type="donut"
				width="100%"
				height="300px"
			/>
		</div>
	);
};

export default PieChart;
