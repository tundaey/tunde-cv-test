import React from 'react';
import { Col } from 'reactstrap';
import sentenceCase from 'sentence-case';
import StarshipCard from './Card';
import SpinnerCentered from './SpinnerCentered';
import Header from './Header';
import useRoot from '../hooks/useRoot';
import { formatDate, likeResource } from '../helpers';

const Species = props => {
	const [root] = useRoot(props);

	if (!root) return null;
	if (root.isLoading) return <SpinnerCentered/>;

	return (
		<React.Fragment>
			<Header title="Species" />
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
							<div style={{ color: 'purple' }}>{result.name}</div>
							<div>{`Language: ${sentenceCase(result.language)}`}</div>
							<div>{`Average lifespan: ${sentenceCase(result.average_lifespan)} years`}</div>
							<div>Created on {formatDate(result.created)}</div>
						</Col>
						<Col
							md="5"
							sm="4"
						>
						  <div>{`${result.people.length} people`}</div>
						  <div>{`${result.films.length} films`}</div>
						</Col>
					</StarshipCard>
				))}
			</div>
		</React.Fragment>
	);
};

export default Species;
