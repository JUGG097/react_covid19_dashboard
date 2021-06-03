import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Confirmedcases from "./components/Confirmedcases";
import Deaths from "./components/Deaths";
import Recovered from "./components/Recovered";
import axios from "axios";
import loadingGif from "./img/Bean_Eater_Loading.svg";
import BarCharts from "./components/BarCharts";

function App() {
	const [confirmedCases, setConfirmedCases] = useState([]);
	const [deathCases, setDeathCases] = useState([]);
	const [recoveredCases, setRecoveredCases] = useState([]);
	const [totalConfirmed, setTotalConfirmed] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	const [totalRecovered, setTotalRecovered] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const getCovidData = () => {
		setIsLoading(true);
		axios
			.get("https://ng-covid-19-api.herokuapp.com/")
			.then((res) => {
				console.log(res.data);
				let statename;
				let statelist = [];
				let confirmedNumber = [];
				let confirmedCasesArray = [];
				let deathCasesArray = [];
				let recoveredCasesArray = [];
				for (statename of Object.keys(res.data.states)) {
					// statelist.push(statename);
					// confirmedNumber.push()
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
					setTotalConfirmed(res.data.summary["Confirmed Cases"]);
					setTotalDeaths(res.data.summary["Death"]);
					setTotalRecovered(res.data.summary["Discharged Cases"]);
					setIsLoading(false);
				}, 3000);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		getCovidData();
	}, []);
	return (
		<div>
			<Header />
			{isLoading ? (
				<div className="text-center">
					{" "}
					<img
						className="img-fluid"
						src={loadingGif}
						alt="Loading GIF"
					></img>{" "}
					<p
						style={{
							color: "white",
						}}
					>
						...fetching the data
					</p>
				</div>
			) : (
				<>
					{/* Covid-19 data by state */}
					<div className="row">
						{/* custom scrollbars */}
						{/* https://codepen.io/devstreak/pen/dMYgeO */}
						<div className="col-sm-3 mt-5">
							<div>
								<Confirmedcases
									data={confirmedCases}
									count={totalConfirmed}
								/>
							</div>
						</div>
						<div className="col-sm-3 mt-5">
							<div className="text-center">
								<div class="embed-responsive embed-responsive-4by3">
									<iframe
										className="embed-responsive-item"
										src="https://folium-choropleth-map.herokuapp.com"
										title="Chloropeth Map"
										allowfullscreen
									/>
								</div>
								<button
									className="btn btn-primary"
									style={{
										margin: 0,
										backgroundColor: "orange",
									}}
								>
									<a
										href="https://folium-choropleth-map.herokuapp.com"
										target="_blank"
										rel="noreferrer"
									>
										Launch Map
									</a>
								</button>
							</div>
						</div>
						<div className="col-sm-3 mt-5">
							<div>
								<Deaths data={deathCases} count={totalDeaths} />
							</div>
						</div>
						<div className="col-sm-3 mt-5 pb-2">
							<div>
								<Recovered
									data={recoveredCases}
									count={totalRecovered}
								/>
							</div>
						</div>
					</div>

					{/* Covid-19 data based charts */}
					<h3>Charts</h3>
					<div className="row text-center">
						<div className="col-sm-3 mt-5 p-3">
							<div
								style={{
									backgroundColor: "#222222",
								}}
							>
								<BarCharts confirmedList={confirmedCases} />
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
