import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = ({ confirmedCases, activeCases, deaths, recovered }) => {
	const state = {
		labels: ["Active Cases (%)", "Death (%)", "Recovered (%)"],
		datasets: [
			{
				label: "Cases Percent",
				backgroundColor: ["#C9DE00", "#00A6B4", "#2FDE00"],
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: [
					(activeCases * 100) / confirmedCases,
					(deaths * 100) / confirmedCases,
					(recovered * 100) / confirmedCases,
				],
			},
		],
	};

	return (
		<div>
			<Doughnut
				// width={250}
				data={state}
				options={{
					mainAspectRatio: false,
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
				// height={300}
			/>
		</div>
	);
};

export default PieChart;
