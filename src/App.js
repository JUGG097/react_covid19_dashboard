import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Confirmedcases from "./components/Confirmedcases";
import Deaths from "./components/Deaths";
import Recovered from "./components/Recovered";
import axios from "axios";
import loadingGif from "./img/Bean_Eater_Loading.gif";
import errorGif from "./img/error_lighter.gif";
import BarCharts from "./components/BarCharts";
// import PieChart from "./components/PieChart";
import Footer from "./components/Footer";
import MapViz from "./components/MapViz";

function App() {
	const [confirmedCases, setConfirmedCases] = useState([]);
	const [deathCases, setDeathCases] = useState([]);
	const [recoveredCases, setRecoveredCases] = useState([]);
	const [totalConfirmed, setTotalConfirmed] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	const [totalRecovered, setTotalRecovered] = useState(0);
	const [totalActive, setTotalActive] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [errorFetching, setErrorFetching] = useState(false);
	const getCovidData = () => {
		setIsLoading(true);
		axios
			.get("https://ng-covid-19-api.herokuapp.com/")
			.then((res) => {
				// console.log(res.data);
				let statename;

				let confirmedCasesArray = [];
				let deathCasesArray = [];
				let recoveredCasesArray = [];
				for (statename of Object.keys(res.data.states)) {
					confirmedCasesArray.push({
						state: statename,
						number: res.data.states[statename][0]["confirmed"],
					});
					deathCasesArray.push({
						state: statename,
						number: res.data.states[statename][0]["deaths"],
					});
					recoveredCasesArray.push({
						state: statename,
						number: res.data.states[statename][0]["discharged"],
					});
				}
				setTimeout(() => {
					setConfirmedCases(confirmedCasesArray);
					setDeathCases(deathCasesArray);
					setRecoveredCases(recoveredCasesArray);
					setTotalConfirmed(
						res.data.summary["Confirmed Cases"].replace(/,/g, "")
					);
					setTotalDeaths(res.data.summary["Death"].replace(/,/g, ""));
					setTotalRecovered(
						res.data.summary["Discharged Cases"].replace(/,/g, "")
					);
					setTotalActive(
						res.data.summary["Active Cases"].replace(/,/g, "")
					);
					setIsLoading(false);
				}, 3000);
			})
			.catch((err) => {
				setIsLoading(false);
				setErrorFetching(true);
			});
	};

	useEffect(() => {
		getCovidData();
	}, []);

	return (
		<div>
			<Header />
			<div className="container">
				{isLoading ? (
					<div className="text-center">
						<img
							className="img-fluid"
							src={loadingGif}
							alt="Loading GIF"
						></img>
						<p
							style={{
								color: "white",
							}}
						>
							...fetching Covid data
						</p>
					</div>
				) : errorFetching ? (
					<div className="text-center">
						<img
							className="img-fluid"
							src={errorGif}
							alt="Loading GIF"
						></img>
						<h3
							style={{
								color: "white",
							}}
						>
							Error Fetching Data, Please Check Connection and
							Refresh
						</h3>
					</div>
				) : (
					<>
						{/* Covid-19 data by state */}
						<div className="row mt-2">
							{" "}
							{/* custom scrollbars */}
							{/* https://codepen.io/devstreak/pen/dMYgeO */}
							<div className="col-sm-4 mb-4">
								<div>
									<Confirmedcases
										data={confirmedCases}
										count={totalConfirmed}
									/>
								</div>
							</div>
							<div className="col-sm-4 mb-4">
								<div>
									<Deaths
										data={deathCases}
										count={totalDeaths}
									/>
								</div>
							</div>
							<div className="col-sm-4 mb-4">
								<div>
									<Recovered
										data={recoveredCases}
										count={totalRecovered}
									/>
								</div>
							</div>
						</div>

						{/* Map Visualization */}
						<h3
							className="text-center mt-3"
							style={{
								color: "white",
							}}
						>
							Map Visualization
							<i>(best viewed on large screen)</i>
						</h3>
						<div className="row">
							<MapViz />
						</div>

						{/* Covid-19 data based charts */}
						<h3
							className="text-center mt-3"
							style={{
								color: "white",
							}}
						>
							Summary Chart
						</h3>
						<div className="row text-center ">
							<div className="col-sm-8 p-3 mx-auto">
								<div
									className="ml-2 mr-2 p-1"
									style={{
										backgroundColor: "#222222",
										borderRadius: "10px",
									}}
								>
									<BarCharts
										style={{}}
										confirmedCases={totalConfirmed}
										activeCases={totalActive}
										deaths={totalDeaths}
										recovered={totalRecovered}
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</div>

			<Footer />
		</div>
	);
}

export default App;
