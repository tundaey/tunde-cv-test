import moment from 'moment';

export const formatDate = date => (
	moment(date).format('MMMM Do YYYY')
);

export const likeResource = (url, setLiked) => {
	if (localStorage.getItem(url)) {
		localStorage.removeItem(url);
		setLiked(null);

		return;
	}
	localStorage.setItem(`${url}`, url);
	setLiked(url);
};
