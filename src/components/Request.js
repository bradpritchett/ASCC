import React, {useState} from "react";
import Results from "./Results";
import API from "../utils/API";

const Request = () => {
	const [initialResults, setInitialResults] = useState(null);
	const [searchName, setSearchName] = useState("");
	const [searchEmail, setSearchEmail] = useState("");

	const processSearch = (e) => {
		e.preventDefault();
		search();
	};
	
	function search() {
		API.request()
		.then(res => {
			console.log(res)
			setInitialResults(res.results)
		})
	};

	return (
		<>
			<div>
				<form onSubmit={processSearch}>
					<div>
						<label>Last Name</label>
						<input type="text" placeholder="Enter User Name" onChange={event => setSearchName(event.target.value)} name="name" />
					</div>
					<div>
						<label>Email</label>
						<input type="text" placeholder="Enter User Email" onChange={event => setSearchEmail(event.target.value)} name="email" />
					</div>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
			<div>
				<Results data={initialResults} name={searchName} email={searchEmail} />
			</div>
		</>
	)
}

export default Request;