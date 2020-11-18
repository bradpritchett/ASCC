import React from 'react';

const Results = (props) => {
 
	if (props.data === null) {
		return (
			<></>
		)
	} else {
	return (
		<div>
			<h2>Results</h2>
			<div id="results">
				<div>
					<img src={props.data.picture.thumbnail} alt={props.name} />
					<span>{props.data.name.first}</span>
					<span>{props.name}</span>
					<span>{props.data.location.city},</span>
					<span>{props.data.location.country}</span>
				</div>
			</div>
		</div>
	)
	}
}

export default Results