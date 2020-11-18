import React, {useState} from "react";
import Results from "./Results";
import API from "../utils/API";

const Request = () => {
	const [data, setInitialData] = useState(null);
	const [searchName, setSearchName] = useState("");
	const [searchEmail, setSearchEmail] = useState("");

	const processSearch = (e) => {
		e.preventDefault();
		search();
	};
	
	function search() {
		API.request()
		.then(res => {
			setInitialData(res.results[0])
		})
	};
	function capitalizeFirstLetter(string) {
		return setSearchName(string.charAt(0).toUpperCase() + string.slice(1));
	  }

	function clearForm() {
		document.getElementById("searchForm").reset();
		setInitialData(null);
	}

	return (
		<>
			<div>
				<form onSubmit={processSearch} id="searchForm">
					<div>
						<label>Last Name</label>
						<input type="text" placeholder="Enter User Name" onChange={event => capitalizeFirstLetter(event.target.value)} name="name" />
					</div>
					<div>
						<label>Email</label>
						<input type="text" placeholder="Enter User Email" onChange={event => setSearchEmail(event.target.value)} name="email" />
					</div>
					<input type="submit" value="Submit"></input>
					<input type="button" value="Clear" onClick={clearForm}></input>
				</form>
			</div>
			<div>
				<Results data={data} name={searchName} email={searchEmail} />
			</div>
		</>
	)
}

export default Request;