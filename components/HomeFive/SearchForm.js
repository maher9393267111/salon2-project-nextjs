import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import axios from 'axios'

const SearchForm = () => {
	// state
	let Doctors = []
	const [name, setName] = useState(null)
	const [specality, setSpecality] = useState(null)

	useEffect(async () => {
		let header = {
			headers: {
				authorization:
					'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTcyNGI3YjM0OGM3YWE3M2U1OTQ1MyIsImVtYWlsIjoicWFhQHFhYS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY0OTg3ODE5OSwiZXhwIjoxNjUyNDcwMTk5LCJhdWQiOiJib29rZWR5YSIsImlzcyI6IkJPT0tFRFlBX0FQSV8wMV8xMF8yMDIxIn0.eqZ6uy9frcaX5OEokFceXIkMVbjMcpKDZEh4AYMuhsE'
			}
		}
		Doctors = await axios.get(`http://localhost:4000/doctor/search?name=${name}&specality${specality}`, header)
	}, [name, specality])

	return (
		<div className="search-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<form className="top-search-from">
							<div className="row">
								<div className="col-12">
									<div className="searchs-wraps">
										<input type="text" className="form-control" id="Search" placeholder="Start Your Search" />

										<button type="button" className="search-btn">
											<i className="bx bx-search"></i>
										</button>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-5 col-sm-6">
									<div className="form-group">
										<input type="text" className="form-control" id="Location" placeholder="Search Doctors, clinics,etc" onBlur={(e) => setName(e.target.value)} />
									</div>
								</div>

								<div className="col-lg-5 col-sm-6">
									<div className="form-group">
										<select className="form-control" onChange={(e) => setSpecality(e.target.value)}>
											<option value="Cardiologist">Cardiologist</option>
											<option value="Necrologist">Necrologist</option>
											<option value="Surgery Specialist">Surgery Specialist</option>
											<option value="Allergist">Allergist</option>
										</select>
									</div>
								</div>

								<div className="col-lg-2">
									<button type="button" className="find-btn">
										<i className="bx bx-right-arrow-alt"></i>
									</button>
								</div>
							</div>
						</form>
					</div>

					<div className="col-lg-4">
						<div className="join-our-team">
							<span>Are You Doctor?</span>
							<h3>Join Our Team</h3>
							<Link href="/index-5/#">
								<a className="default-btn">Join As A Doctor</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchForm
