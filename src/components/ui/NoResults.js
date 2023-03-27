import React from 'react';

import noResults from '../../imgs/noResults.png';

const NoResults = (props) => {
	return (
		<div className="divNoResults">
			<img className="imgNoResults" src={noResults} alt="No results found" />
			<span className="spanNoResults">{props.text}</span>
		</div>
	);
};

export default NoResults;
