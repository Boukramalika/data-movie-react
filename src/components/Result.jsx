import React from 'react'
import Tilt from "react-tilt";

function Result({ result, openPopup }) {
	return (
		
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<div className="">

            <Tilt options={{ max: 50 }}>

			<img src={result.Poster}alt ="" />
            </Tilt>
			<h3>{result.Title}</h3>
			</div>
			       
		</div>

		
		
	)
}

export default Result