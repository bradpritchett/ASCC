import React, {useEffect, useState} from 'react';

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
				<div></div>
			</div>
		</div>
	)
	}
}

export default Results