export const needGetListPodcasts = () => {
	let listSave = localStorage.getItem('list-podcasts');
	if (!listSave) return true;
	return control24hours(localStorage.getItem('lastTime-get-podcasts'));
};

export const needGetDetailPodcast = (id) => {
	let detailSave = localStorage.getItem(`detail-podcast-${id}`);
	if (!detailSave) return true;
	return control24hours(localStorage.getItem(`lastTime-get-detail-${id}`));
};

const control24hours = (dateSave) => {
	let dateNow = new Date();
	let dateYesterday = dateNow.setDate(dateNow.getDate() - 1).toString();
	return dateSave ? dateYesterday >= dateSave : true;
};

export const formatDate = (date) => {
	let newDate = new Date(date);
	let day = newDate.getDate();
	let month = newDate.getMonth();
	let year = newDate.getFullYear();
	return `${day}/${month}/${year}`;
};
