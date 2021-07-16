import React from "react";

import Chart from "react-apexcharts";

const BarCharts = ({ confirmedCases, activeCases, deaths, recovered }) => {
	// console.log(confirmedCases);
	const state = {
		options: {
			chart: {
				id: "basic-bar",
				background: "#222222",
			},

			xaxis: {
				categories: [
					"ConfirmedCases",
					"ActiveCases",
					"Recovered",
					"Death",
				],
				labels: {
					show: true,
					style: {
						colors: ["red", "white", "green", "white"],
						fontSize: "12px",
						fontFamily: "Helvetica, Arial, sans-serif",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label",
					},
				},
			},
			yaxis: {
				labels: {
					show: true,
					style: {
						colors: ["white"],
						fontSize: "12px",
						fontFamily: "Helvetica, Arial, sans-serif",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label",
					},
				},
			},
			plotOptions: {
				bar: {
					dataLabels: {
						position: "top",
					},
				},
			},
			colors: ["#FF0000", "#ffffff", "#00FF00", "#ffffff"],
		},
		series: [
			{
				name: "Cases",
				data: [confirmedCases, activeCases, deaths, recovered],
			},
		],
	};

	return (
		<div>
			<Chart
				options={state.options}
				series={state.series}
				type="bar"
				width="100%"
				height="300px"
			/>
		</div>
	);
};

export default BarCharts;
