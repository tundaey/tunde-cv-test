import React from 'react';
import { waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../renderWithRedux';
import Home from '../Home';
import { getRoots } from '../../api';

jest.mock('../../api');

const mockGetRoots = () => (
	getRoots.mockImplementation(() => Promise.resolve(
		{
			films: 'films',
			people: 'people',
			planets: 'planets',
			species: 'species',
			starships: 'starships',
			vehicles: 'vehicles',
		},
	))
);

describe('<Home/>', () => {
	beforeEach(() => mockGetRoots());
	it('should render loading spinner on initial render', () => {
		const { container } = renderWithRedux(<Home/>);

		expect(container.querySelector('.spinner-border')).toBeTruthy();
	});

	it('should render the root resources when data is fetched', async () => {
		const { container } = renderWithRedux(<Home/>);

		const navNode = await waitForElement(() => container.querySelector('.nav'));
		const navItems = container.querySelectorAll('.nav-item');

		expect(navNode).toBeTruthy();
		expect(navItems.length).toBe(6);
	});

	it('should render an error message when there is an error fetching data', async () => {
		getRoots.mockImplementation(() => Promise.reject('error'));
		const { container } = renderWithRedux(<Home/>);

		const errorNode = await waitForElement(() => container.querySelector('.alert'));

		expect(errorNode).toBeTruthy();
		expect(errorNode.innerHTML).toBe(' Error fetching data');
	});
})
;
