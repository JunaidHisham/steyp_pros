import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import axiosConfig from "../../../axiosConfig";
import styled from "styled-components";

function LoginPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { updateUserData } = useContext(UserContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		if (e.target.name == "username") {
			setUsername(e.target.value);
		} else if (e.target.name == "email") {
			setEmail(e.target.value);
		} else if (e.target.name == "password") {
			setPassword(e.target.value);
		}
	};
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log("submitting Login form");
		console.log(username, password);
		axios
			.post(`${axiosConfig}api/auth/login/`, {
				username: username,
				password: password,
			})
			.then((response) => {
				console.log(response.data);
				let data = response.data;
				localStorage.setItem("user_data", JSON.stringify(data));
				updateUserData({ type: "LOGIN", payload: data });
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<FormBox action="" method="POST" onSubmit={handleLoginSubmit}>
				<Heading>User Login </Heading>
				<InputContainer>
					<InputLabel htmlFor="username">Username</InputLabel>
					<InputField name="username" type="text" onChange={(e) => handleChange(e)} id="username" placeholder="Username" />
				</InputContainer>
				<InputContainer>
					<InputLabel htmlFor="password">password</InputLabel>
					<InputField name="password" type="text" id="password" onChange={(e) => handleChange(e)} placeholder="Password" />
				</InputContainer>
				<InputContainer>
					<InputField type="submit" />
				</InputContainer>
				<ToSignup href="/user/signup">Sign up</ToSignup>
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
const ToSignup = styled.a`
	width: 100px;
	text-decoration: none;
	padding: 10px;
	display: block;
	background-color: #625454;
	color: #fff;
	text-align: center;
`;

export default LoginPage;
