import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Confirmedcases from "./components/Confirmedcases";
import Deaths from "./components/Deaths";
import Recovered from "./components/Recovered";
import axios from "axios";
import loadingGif from "./img/Bean_Eater_Loading.svg";

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
				<div className="row">
					<div className="col-sm-3 mt-3">
						<div
							style={{ height: "400px", overflowY: "scroll" }}
							id="scrollStyle1"
						>
							<Confirmedcases
								data={confirmedCases}
								count={totalConfirmed}
							/>
						</div>
					</div>
					<div className="col-sm-3 mt-3">
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
					<div className="col-sm-3 mt-3">
						<div
							style={{ height: "400px", overflowY: "scroll" }}
							id="scrollStyle1"
						>
							<Deaths data={deathCases} count={totalDeaths} />
						</div>
					</div>
					<div className="col-sm-3 mt-3">
						<div
							style={{ height: "400px", overflowY: "scroll" }}
							id="scrollStyle1"
						>
							<Recovered
								data={recoveredCases}
								count={totalRecovered}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
