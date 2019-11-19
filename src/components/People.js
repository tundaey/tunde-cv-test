import React from 'react';
import useRoot from '../hooks/useRoot';
import { Col } from 'reactstrap';
import sentenceCase from 'sentence-case';

import StarshipCard from './Card';
import SpinnerCentered from './SpinnerCentered';
import Header from './Header';
import { formatDate, likeResource } from '../helpers';

const People = props => {
	const [root] = useRoot(props);

	if (!root) return null;
	if (root.isLoading) return <SpinnerCentered/>;

	return (
		<React.Fragment>
			<Header title="People"/>
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
							<div data-testid="people-name" style={{ color: 'blue' }}>{result.name}</div>
							<div data-testid="people-gender">{sentenceCase(result.gender)}</div>
							<div data-testid="people-created">Created on {formatDate(result.created)}</div>
						</Col>
						<Col
							md="5"
							sm="4"
						>
						  <div data-testid="people-films">{`${result.films.length} films`}</div>
						  <div data-testid="people-starships">{`${result.starships.length} starships`}</div>
						  <div data-testid="people-vehicles">{`${result.vehicles.length} vehicles`}</div>
						</Col>
					</StarshipCard>
				))}
			</div>
		</React.Fragment>
	);
};

export default People;
