import React from 'react';
import { Col } from 'reactstrap';
import sentenceCase from 'sentence-case';
import StarshipCard from './Card';
import SpinnerCentered from './SpinnerCentered';
import Header from './Header';
import useRoot from '../hooks/useRoot';
import { formatDate, likeResource } from '../helpers';

const Vehicles = props => {
	const [root] = useRoot(props);

	if (!root) return null;
	if (root.isLoading) return <SpinnerCentered/>;

	return (
		<React.Fragment>
			<Header title="Vehicles"/>
			<div>
				{root.payload.results.map(result => (
					<StarshipCard
						className="mb-2"
						key={result.name}
						likeResource={likeResource}
						url={result.url}
					>
						<Col
							md="5"
							sm="4"
						>
							<div style={{ color: '#FFDC00' }}>{result.name}</div>
							<div>{`Model: ${sentenceCase(result.model)}`}</div>
							<div>{`Class: ${sentenceCase(result.vehicle_class)}`}</div>
							<div>{`Manufactured by: ${sentenceCase(result.manufacturer)}`}</div>
							<div>Created on {formatDate(result.created)}</div>
						</Col>
						<Col
							md="5"
							sm="4"
						>
						  <div>{`${result.films.length} films`}</div>
						  <div>{`${result.crew} members`}</div>
						  <div>{`${result.cost_in_credits} credits`}</div>
						</Col>
					</StarshipCard>
				))}
			</div>
		</React.Fragment>
	);
};

export default Vehicles;
