export const needCallApi = () => {
	let listSave = localStorage.getItem('list-podcasts');
	if (!listSave) return true;
	let dateNow = new Date();
	let dateYesterday = dateNow.setDate(dateNow.getDate() - 1).toString();
	let dateSave = localStorage.getItem('lastTime-get-podcasts');
	return dateSave ? dateYesterday >= dateSave : true;
};
