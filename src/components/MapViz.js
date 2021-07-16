import React from "react";

const MapViz = () => {
	return (
		<div className="col-12 mb-2">
			<div className="text-center">
				<div
					class="embed-responsive embed-responsive-4by3"
					style={{ maxHeight: "400px" }}
				>
					<iframe
						className="embed-responsive-item"
						src="https://folium-choropleth-map.herokuapp.com"
						title="Chloropeth Map"
						// allowfullscreen
					/>
				</div>
			</div>
		</div>
	);
};

export default MapViz;
