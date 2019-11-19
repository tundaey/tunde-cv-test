import React from 'react';

import Films from './Films';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicles';

const FILMS = 'films';
const PEOPLE = 'people';
const PLANETS = 'planets';
const SPECIES = 'species';
const STARSHIPS = 'starships';
const VEHICLES = 'vehicles';

const Tab = props => {
	switch (props.type) {
		case PEOPLE:
			return <People {...props}/>;
		case PLANETS:
			return <Planets {...props}/>;
		case FILMS:
			return <Films {...props}/>;
		case SPECIES:
			return <Species {...props}/>;
		case STARSHIPS:
			return <Starships {...props}/>;
		case VEHICLES:
			return <Vehicles {...props}/>;
		default:
			return <People {...props}/>;
	}
};

export default Tab;
