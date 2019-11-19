import React from 'react';
import { Col } from 'reactstrap';
import sentenceCase from 'sentence-case';
import StarshipCard from './Card';
import SpinnerCentered from './SpinnerCentered';
import Header from './Header';
import useRoot from '../hooks/useRoot';
import { formatDate, likeResource } from '../helpers';

const Planets = props => {
	const [root] = useRoot(props);

	if (!root) return null;
	if (root.isLoading) return <SpinnerCentered/>;

	return (
		<React.Fragment>
			<Header title="Planets"/>
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
							<div style={{ color: 'green' }}>{result.name}</div>
							<div>{`${sentenceCase(result.climate)} climate`}</div>
							<div>{sentenceCase(result.terrain)}</div>
							<div>Created on {formatDate(result.created)}</div>
						</Col>
						<Col
							md="5"
							sm="4"
						>
						  <div>{`${result.films.length} films`}</div>
						  <div>{`${result.population} people`}</div>
						  <div>{`${result.residents.length} residents`}</div>
						</Col>
					</StarshipCard>
				))}
			</div>
		</React.Fragment>
	);
};

export default Planets;
