export default {
	request: function() {
		let url = `https://randomuser.me/api/`;
		return fetch(url, {
			method: 'GET'
		}).then(response => response.json());
	}	
}
