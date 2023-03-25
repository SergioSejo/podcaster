import React, { useEffect, useState } from 'react';

import noResults from '../../imgs/noResults.png';

const NoResults = () => {
	return (
		<div className="divNoResults">
			<img className="imgNoResults" src={noResults} alt="No results found" />
			<span className="spanNoResults">
				No hay resultados que coincidan con la búsqueda
			</span>
		</div>
	);
};

export default NoResults;
