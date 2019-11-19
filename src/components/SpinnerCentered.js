import React from 'react';
import { Spinner } from 'reactstrap';

const SpinnerCentered = () => (
	<div className="mt-3 d-flex justify-content-center">
		<Spinner color="secondary" />
	</div>
);

export default SpinnerCentered;
