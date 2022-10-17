import React from "react";
import styled from "styled-components";

function BreadCrumps() {
	const listingitems = {
		breadcrumps1: [
			{
				id: 1,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 2,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 3,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 4,
				name: "Breadcrumps",
				link: "https://.......",
				status: true,
			},
		],
		breadcrumps2: [
			{
				id: 1,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 2,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 3,
				name: "Breadcrumps",
				link: "https://.......",
				status: true,
			},
		],
		breadcrumps3: [
			{
				id: 1,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 2,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 3,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 4,
				name: "Breadcrumps",
				link: "https://.......",
				status: false,
			},
			{
				id: 5,
				name: "Breadcrumps",
				link: "https://.......",
				status: true,
			},
		],
	};
	return (
		<MainContainer>
			<ContainerBox>
				<CrumpsUl>
					{listingitems.breadcrumps1.map((item) => (
						<CrumpsLi key={item.id}>
							<Item className={item.status && "active"}>{item.name}/</Item>
						</CrumpsLi>
					))}
				</CrumpsUl>
				<CrumpsUl>
					{listingitems.breadcrumps2.map((item) => (
						<CrumpsLi key={item.id}>
							<Item className={item.status && "active"}>{item.name}/</Item>
						</CrumpsLi>
					))}
				</CrumpsUl>
				<CrumpsUl>
					{listingitems.breadcrumps3.map((item) => (
						<CrumpsLi key={item.id}>
							<Item className={item.status && "active"}>{item.name}/</Item>
						</CrumpsLi>
					))}
				</CrumpsUl>
			</ContainerBox>
		</MainContainer>
	);
}
const MainContainer = styled.div``;
const ContainerBox = styled.div``;
const CrumpsUl = styled.ul`
	display: flex;
	list-style: none;
`;
const CrumpsLi = styled.li`
	margin-right: 3px;
`;
const Item = styled.p`
	color: #000;
	&.active {
		color: red;
	}
`;
export default BreadCrumps;
