import React from 'react';
import { fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../renderWithRedux';
import People from '../People';
import { getRoot } from '../../api';

jest.mock('../../api');

const mockGetRoot = () => (
	getRoot.mockImplementation(() => Promise.resolve(
		{
			results: [{
				name: 'Luke Skywalker',
				films: ['film 1', 'film 2', 'film 8', 'film 7'],
				gender: 'male',
				created: '2014-12-09',
				starships: ['starship 1', 'starship 2'],
				vehicles: ['vehicles 1', 'vehicles 2', 'vehicles 3'],
				url: 'www.myapi/people/1',
			}],
		},
	))
);

describe('<People/>', () => {
	beforeEach(() => mockGetRoot());
	it('should show loader when fetching data', () => {
		const { container } = renderWithRedux(
			<People
				activeTab="people"
				type="people"
			/>
		);

		expect(container.querySelector('.spinner-border')).toBeTruthy();
	});

	it('should render the list of people when data is fetched', async () => {
		const { getAllByTestId } = renderWithRedux(
			<People
				activeTab="people"
				type="people"
			/>
		);

		const cardNodes = await waitForElement(() => getAllByTestId('card'));

		expect(cardNodes.length).toBe(1);
		expect(getAllByTestId('people-name')[0].innerHTML).toBe('Luke Skywalker');
		expect(getAllByTestId('people-gender')[0].innerHTML).toBe('Male');
		expect(getAllByTestId('people-created')[0].innerHTML).toBe('Created on December 9th 2014');
		expect(getAllByTestId('people-films')[0].innerHTML).toBe('4 films');
		expect(getAllByTestId('people-starships')[0].innerHTML).toBe('2 starships');
		expect(getAllByTestId('people-vehicles')[0].innerHTML).toBe('3 vehicles');
	});

	it('should render favorited icon when a resource type is favorited', async () => {
		const { container, getAllByTestId } = renderWithRedux(
			<People
				activeTab="people"
				type="people"
			/>
		);

		const cardNodes = await waitForElement(() => getAllByTestId('card'));

		expect(cardNodes.length).toBe(1);
		expect(getAllByTestId('like')[0]).toBeTruthy();
		fireEvent.click(getAllByTestId('like')[0]);

		const likeNodes = await waitForElement(() => getAllByTestId('liked'));

		expect(likeNodes[0]).toBeTruthy();
	});
})
;
