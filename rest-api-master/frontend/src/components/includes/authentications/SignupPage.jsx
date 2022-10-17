import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axiosConfig from "../../../axiosConfig";

function SignupPage() {
	const [username, setUsername] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const navigate = useNavigate();

	const handleChange = (e) => {
		if (e.target.name == "username") {
			setUsername(e.target.value);
		} else if (e.target.name == "email") {
			setEmail(e.target.value);
		} else if (e.target.name == "password") {
			setPassword(e.target.value);
		} else if (e.target.name == "first_name") {
			setFirstname(e.target.value);
		} else if (e.target.name == "last_name") {
			setLastname(e.target.value);
		} else if (e.target.name == "phone") {
			setPhone(e.target.value);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submitting Create form");
		console.log(username, email, password);
		axios
			.post(`${axiosConfig}api/auth/register/`, {
				username: username,
				password: password,
				// phone: phone,
				email: email,
				first_name: firstname,
				last_name: lastname,
			})
			.then((response) => {
				console.log(response.data);
				localStorage.setItem("user_data", JSON.stringify(response.data));
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<FormBox style={{ marginBottom: "50px" }} action="" method="POST" onSubmit={handleSubmit}>
				<Heading>Create User</Heading>
				<InputContainer>
					<InputLabel htmlFor="first_name">first name</InputLabel>
					<InputField name="first_name" type="text" onChange={(e) => handleChange(e)} id="first_name" placeholder="First name" />
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="last_name">last name</InputLabel>
					<InputField name="last_name" type="text" onChange={(e) => handleChange(e)} id="last_name" placeholder="Last name" />
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="username">Username</InputLabel>
					<InputField name="username" type="text" onChange={(e) => handleChange(e)} id="username" placeholder="Username" />
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="email">email</InputLabel>
					<InputField name="email" type="text" id="email" onChange={(e) => handleChange(e)} placeholder="email" />
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="password">password</InputLabel>
					<InputField name="password" type="password" id="password" onChange={(e) => handleChange(e)} placeholder="Password" />
				</InputContainer>
				{/* <InputContainer>
					<label htmlFor="phone">phone</label>
					<InputField name="phone" type="text" id="phone" onChange={(e) => handleChange(e)} placeholder="Phone number" />
				</InputContainer> */}
				<InputContainer>
					<InputField type="submit" />
				</InputContainer>
				<ToLogin href="/user/login">Login</ToLogin>
			</FormBox>
		</>
	);
}

const FormBox = styled.form`
	width: 50%;
	margin: 0 auto;
`;
const Heading = styled.h1`
	font-size: 30px;
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
`;
const InputLabel = styled.label`
	margin-bottom: 10px;
	font-size: 20px;
`;
const InputField = styled.input`
	padding: 10px;
	width: 50%;
	font-size: 18px;
	border: 1px solid #000;
`;
const ToLogin = styled.a`
	width: 100px;
	text-decoration: none;
	padding: 10px;
	display: block;
	background-color: #625454;
	color: #fff;
	text-align: center;
`;

export default SignupPage;
