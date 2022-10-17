import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { listTasks } from "./axiosConfig";
import { MdDeleteOutline } from "react-icons/md";
import { GrRevert } from "react-icons/gr";

function App() {
	const [tasks, setTasks] = useState([]);
	const [text, setText] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		listTasks
			.get("/tasks/")
			.then((response) => {
				console.log(response.data);
				setTasks(response.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const addnewTask = () => {
		
		console.log("====================adding==================");
		let newtask = {
			title: text,
			is_completed: false,
		};
		listTasks
			.post("/tasks/create/", newtask)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const updateTask = ({ pk }) => {
		console.log("update", pk);
		let updatedtask = {
			is_completed: true,
		};
		listTasks
			.post(`/tasks/update/${pk}/`, updatedtask)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const revertTask = ({pk}) => {
		console.log("Revert", pk);
		let updatedtask = {
			is_completed: false,
		};
		listTasks
			.post(`/tasks/update/${pk}/`, updatedtask)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	const handleDelete = (pk) => {
		console.log("deleted");
		let updatedtask = {
			is_deleted: true,
		};
		listTasks
			.post(`/tasks/delete/${pk}/`, updatedtask)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<OuterContainer>
			<TopBox>
				<h4>Things to be done</h4>
				{tasks.map((task) => {
					if (!task.is_completed) {
						return (
							<TaskBox key={task.id}>
								<LeftBox>
									<TaskUpdater onClick={() => updateTask({ pk: task.id })}></TaskUpdater>
									<TaskText>{task.title}</TaskText>
								</LeftBox>
								<TaskDelete>
									<DeleteIcon onClick={() => handleDelete(task.id)} />
								</TaskDelete>
							</TaskBox>
						);
					}
				})}
			</TopBox>
			<InputBoxContainer>
				<InputBox>
					<Input
						type="text"
						placeholder="enter new task"
						onChange={(e) => {
							setText(e.target.value);
						}}
					/>
					<Button
						onClick={() => {
                            addnewTask();
							setText("");
						}}
					>
						Add new
					</Button>
				</InputBox>
			</InputBoxContainer>
			<BottomBox>
				<h4>Completed</h4>
				{tasks.map((task) => {
					if (task.is_completed) {
						return (
							<TaskBox key={task.id}>
								<LeftBox>
									<TaskUpdater className={task.is_completed && "disable"}></TaskUpdater>
									<TaskText>{task.title}</TaskText>
								</LeftBox>
								<TaskDelete>
									<Revert onClick={() => revertTask({ pk: task.id })} />
									<DeleteIcon onClick={() => handleDelete(task.id)} />
								</TaskDelete>
							</TaskBox>
						);
					}
				})}
			</BottomBox>
		</OuterContainer>
	);
}
const OuterContainer = styled.section`
	width: 50%;
	min-height: 100vh;
	margin: 0 auto;
	border-left: 2px solid #636363;
	border-right: 2px solid #636363;
	padding: 100px 40px;
`;
const TopBox = styled.div`
	margin-bottom: 30px;
	max-height: 350px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 5px;
		background-color: #fff;
	}
	::-webkit-scrollbar-thumb {
		background: #34ff22;
		border-radius: 10px;
	}
	h4 {
		font-size: 30px;
		font-weight: 600;
		font-family: "Courier New", Courier, monospace;
		margin-bottom: 30px;
	}
`;
const InputBoxContainer = styled.div`
	margin-bottom: 30px;
`;
const InputBox = styled.div`
	height: 40px;
	display: flex;
	position: relative;
	&::before {
		content: "+";
		z-index: 1;
		position: absolute;
		left: 0;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30px;
		height: 40px;
	}
`;
const Input = styled.input`
	width: 100%;
	height: 100%;
	padding-left: 30px;
	position: relative;
	font-size: 18px;
	&:focus {
		outline: none;
		border: 1px solid #5e5e5e;
	}
`;
const Button = styled.button`
	position: absolute;
	cursor: pointer;
	width: 130px;
	height: 100%;
	right: 0;
	font-weight: 600;
	font-size: 18px;
	background-color: #fff;
	border: 1px solid #333;
`;
const BottomBox = styled.div`
	margin-bottom: 30px;
	max-height: 350px;
	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 5px;
		background-color: #fff;
	}
	::-webkit-scrollbar-thumb {
		background: #ff4a4a;
		border-radius: 10px;
	}
	h4 {
		font-size: 30px;
		font-weight: 600;
		font-family: "Courier New", Courier, monospace;
		margin-bottom: 30px;
	}
`;
const TaskBox = styled.div`
	height: 40px;
	box-shadow: 1px 2px 8px 0px #d6d6d6;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 20px;
	margin-bottom: 20px;
`;
const LeftBox = styled.div`
	display: flex;
	align-items: center;
`;
const TaskUpdater = styled.span`
	display: inline-block;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 2px solid #7c7c7c;
	margin-right: 15px;
	cursor: pointer;
	&.disable {
		cursor: not-allowed;
		border-color: #29e029;
	}
`;
const TaskText = styled.p`
	font-size: 18px;
`;
const TaskDelete = styled.span`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 20px;
	img {
		display: block;
		width: 100%;
	}
`;
const DeleteIcon = styled(MdDeleteOutline)`
	cursor: pointer;
	font-size: 25px;
	color: red;
`;
const Revert = styled(GrRevert)`
	cursor: pointer;
	font-size: 25px;
	color: green;
	margin-right: 20px;
`;

export default App;
