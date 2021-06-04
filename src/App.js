import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Confirmedcases from "./components/Confirmedcases";
import Deaths from "./components/Deaths";
import Recovered from "./components/Recovered";
import axios from "axios";
import loadingGif from "./img/Bean_Eater_Loading.svg";
import BarCharts from "./components/BarCharts";
import PieChart from "./components/PieChart";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function App() {
	const [confirmedCases, setConfirmedCases] = useState([]);
	const [deathCases, setDeathCases] = useState([]);
	const [recoveredCases, setRecoveredCases] = useState([]);
	const [totalConfirmed, setTotalConfirmed] = useState(0);
	const [totalDeaths, setTotalDeaths] = useState(0);
	const [totalRecovered, setTotalRecovered] = useState(0);
	const [totalActive, setTotalActive] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
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
			.catch((err) => {});
	};

	let d = new Date();
	let yearDate = d.getFullYear();

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
						...fetching Covid data
					</p>
				</div>
			) : (
				<>
					{/* Covid-19 data by state */}
					<div className="row mt-2">
						{/* custom scrollbars */}
						{/* https://codepen.io/devstreak/pen/dMYgeO */}
						<div className="col-sm-3 mb-4">
							<div>
								<Confirmedcases
									data={confirmedCases}
									count={totalConfirmed}
								/>
							</div>
						</div>
						<div className="col-sm-3 mb-4">
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
						<div className="col-sm-3 mb-4">
							<div>
								<Deaths data={deathCases} count={totalDeaths} />
							</div>
						</div>
						<div className="col-sm-3 mb-4">
							<div>
								<Recovered
									data={recoveredCases}
									count={totalRecovered}
								/>
							</div>
						</div>
					</div>

					{/* Covid-19 data based charts */}
					<h3
						className="text-center mt-3"
						style={{
							color: "white",
						}}
					>
						Summary Charts
					</h3>
					<div className="row text-center">
						<div className="col-sm-6 p-3">
							<div
								className="ml-2 mr-2"
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

						<div className="col-sm-6 p-3" style={{}}>
							<div
								className="ml-2 mr-2"
								style={{
									backgroundColor: "#222222",
									borderRadius: "10px",
								}}
							>
								<PieChart
									style={{}}
									confirmedCases={totalConfirmed}
									activeCases={totalActive}
									deaths={totalDeaths}
									recovered={totalRecovered}
								/>
							</div>
						</div>
					</div>

					<div
						style={{
							backgroundColor: "#222222",
							borderRadius: "10px",
							paddingTop: ".2rem",
						}}
					>
						<div className="row mt-4">
							<div className="col-sm-12 text-center">
								<span>
									<a href="https://github.com/JUGG097/react_covid19_dashboard">
										<FaGithub
											style={{
												color: "white",
												fontSize: "1.5rem",
											}}
										/>
									</a>
								</span>

								<span className="mr-4 ml-4">
									<a href="https://www.linkedin.com/in/adeoluwa-adeboye-051057146/">
										<FaLinkedin
											style={{
												color: "#0e76a8",
												fontSize: "1.5rem",
											}}
										/>
									</a>
								</span>

								<span>
									<a href="https://twitter.com/adeneye97">
										<FaTwitter
											style={{
												color: "#1DA1F2",
												fontSize: "1.5rem",
											}}
										/>
									</a>
								</span>
							</div>
						</div>
						<div className="row mt-3">
							<div
								className="col-sm-12 text-center"
								style={{
									color: "white",
								}}
							>
								<p>Copyright &copy; {yearDate}</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
