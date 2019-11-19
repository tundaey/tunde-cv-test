import React, { useState } from 'react';
import {
	Card, CardBody,
	Col, Row,
} from 'reactstrap';

import { IoIosHeartEmpty } from 'react-icons/io';
import { IoIosHeart } from 'react-icons/io';

const StarshipCard = props => {
	const savedItem = localStorage.getItem(`${props.url}`);
	const [liked, setLiked] = useState(savedItem);

	return (
		<Card
			className={props.className}
			data-testid="card"
			key={props.title}
		>
			<CardBody>
				<Row>
					{props.children}
					<Col>
						{!liked ? (
							<IoIosHeartEmpty
								data-testid="like"
								onClick={() => props.likeResource(props.url, setLiked)}
								size="2em"
							/>
						) : (
							<IoIosHeart
								color="purple"
								data-testid="liked"
								onClick={() => props.likeResource(props.url, setLiked)}
								size="2em"
							/>
						)}

					</Col>
				</Row>
			</CardBody>
		</Card>
	);
};

export default StarshipCard;
