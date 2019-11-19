import React from 'react';
import useRoot from '../hooks/useRoot';
import { Col } from 'reactstrap';
import sentenceCase from 'sentence-case';
import StarshipCard from './Card';
import SpinnerCentered from './SpinnerCentered';
import Header from './Header';
import { formatDate, likeResource } from '../helpers';

const Films = props => {
	const [root] = useRoot(props);

	if (!root) return null;
	if (root.isLoading) return <SpinnerCentered/>;

	return (
		<React.Fragment>
			<Header title="Films" />
			<div>
				{root.payload.results.map(result => (
					<StarshipCard
						className="mb-2"
						key={result.title}
						likeResource={likeResource}
						url={result.url}
					>
						<Col
							md="5"
							sm="4"
						>
							<div style={{ color: 'red' }}>{result.title}</div>
							<div>{`Directed by: ${sentenceCase(result.director)}`}</div>
							<div>{`Produced by: ${sentenceCase(result.producer)}`}</div>
							<div>Released on {formatDate(result.release_date)}</div>
						</Col>
						<Col
							md="5"
							sm="4"
						>
						  <div>{`${result.vehicles.length} vehicles`}</div>
						  <div>{`${result.starships.length} starships`}</div>
						  <div>{`${result.species.length} species`}</div>
						  <div>{`${result.planets.length} planets`}</div>
						</Col>
					</StarshipCard>
				))}
			</div>
		</React.Fragment>
	);
};

export default Films;
