export default {
	request: function() {
		return fetch('https://randomuser.me/api/', {
			method: 'GET'
		}).then(response => response.json());
	}	
}
