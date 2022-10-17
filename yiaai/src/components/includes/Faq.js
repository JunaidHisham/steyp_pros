import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "../../App.css";

function Faq() {
	const [selectedFaq, setSelectedFaq] = useState("");
	const [faqs, setFaqs] = useState([
		{
			id: "1",
			qs: "Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാവാൻ സാധിക്കുന്നത് ആർക്കെല്ലാം?",
			ans: "LP, UP, HS, HSE, VHSE സ്കൂൾ വിദ്യാർത്ഥികൾക്ക Tefun പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
		},
		{
			id: "2",
			qs: "എങ്ങനെയാണ് സ്കൂളുകൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുക?",
			ans: "ഈ പ്രോഗ്രാമിന്റെ ഭാഗമാകാൻ ആഗ്രഹിക്കുന്ന സ്കൂളുകൾക്ക് Talrop നൽകിയിരിക്കുന്ന ഫോൺ നമ്പരിൽ കോൺടാക്ട് ചെയ്ത് പ്രോഗ്രാം സ്കൂളിൽ നടപ്പിലാക്കാവുന്നതാണ്.",
		},
		{
			id: "3",
			qs: "എന്താണ് Tefun ലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭിക്കുന്ന നേട്ടം?",
			ans: " ലളിതവും രസകരവുമായ ടെക്ക്നോളജി പഠനമാണ് Tefun പ്രോഗ്രാമിലൂടെ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാകുന്നത്. AI, Robotics, IoT, 3D Printing, Metaverse, web 3.0 എന്നിങ്ങനെ 70-ൽപ്പരം ഭാവിയിലെ ടെക്ക്നോളജി സാധ്യതകളെക്കുറിച്ചാണ് Tefun വിദ്യാർത്ഥികളുടെ മുൻപിലേക്ക് എത്തിക്കുന്നത്. Tefun പ്രോഗ്രാം വിജയകരമായി പൂർത്തിയാക്കുന്ന വിദ്യാർത്ഥികൾക്ക് ടാൽറോപ് സർട്ടിഫിക്കറ്റ് നൽകുന്നതാണ്.",
		},
		{
			id: "4",
			qs: "Tefun പ്രോഗ്രാം നിലവിലെ പഠനത്തെ ബാധിക്കുമോ?",
			ans: "അക്കാദമിക് പഠനത്തിന് ശേഷം ഒഴിവുസമയങ്ങളിൽ വിദ്യാർത്ഥികൾക്ക് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കാവുന്നതാണ്. പത്തു മണിക്കൂറിൽ താഴെയാണ് പ്രോഗ്രാം ഡ്യൂറേഷൻ വരുന്നത്. ഒരു ദിവസം 15 മിനിറ്റ് മാറ്റിവെച്ചാൽ പ്രോഗ്രാം നിശ്ചയിച്ച കാലയളവിൽ പൂർത്തിയാക്കാവുന്നതാണ്.",
		},
		{
			id: "5",
			qs: "വിദ്യാർത്ഥികൾക്ക് ഡയറക്ട് Tefun പ്രോഗ്രാമിൽ പങ്കെടുക്കുവാൻ സാധിക്കുമോ?",
			ans: "Tefun പ്രോഗ്രാം സ്കൂളുകൾ മുഖേനയാണ് നടപ്പിലാക്കുന്നത്. അതുകൊണ്ട് തന്നെ വിദ്യാർത്ഥികൾക്ക് സ്കൂൾ മുഖാന്തരം മാത്രമേ പങ്കെടുക്കാൻ സാധിക്കുകയുള്ളൂ. നിങ്ങളുടെ സ്കൂൾ ഇതിൽ ഭാഗമായിട്ടില്ലെങ്കിൽ സ്കൂൾ അധികൃതരുമായി ബന്ധപ്പെട്ട ശേഷം നിങ്ങളുടെ സ്കൂൾ Tefun-ൽ രജിസ്റ്റർ ചെയ്ത് പ്രോഗ്രാമിന്റെ ഭാഗമാകാവുന്നതാണ്.",
		},
	]);

	const renderFaqs = () => {
		return faqs.map((faq) => (
			<FaqItem
				key={faq.id}
				onClick={() => {
					if (faq.id === selectedFaq) {
						setSelectedFaq("");
					} else {
						setSelectedFaq(faq.id);
					}
				}}
			>
				<Content>
					<H3>{faq.qs}</H3>
					<Arrow className={`${faq.id == selectedFaq && "active"}`}>
						<DownArrow src={require("../images/down-arrow.svg").default} alt="Down Arrow" />
					</Arrow>
				</Content>
				<FaqPara className={`${faq.id == selectedFaq && "active"}`}>{faq.ans}</FaqPara>
			</FaqItem>
		));
	};

	return (
		<>
			<FaqContainer>
				<FaqContainerWrapper>
					<FaqHeading>
						<FaqSpan>Frequently</FaqSpan>
						<br />
						Asked Questions
					</FaqHeading>
					<FaqQuestions className="faq-section-ul">{renderFaqs()}</FaqQuestions>
				</FaqContainerWrapper>
			</FaqContainer>
		</>
	);
}

const FaqContainer = styled.section``;
const FaqContainerWrapper = styled.section`
	width: 90%;
	margin: 0 auto;
	max-width: 1280px;
`;
const FaqHeading = styled.h2`
	color: rgb(45, 45, 45);
	text-align: center;
	margin-bottom: 50px;
	font-size: 34px;
	font-family: "gorditaregular";
`;
const FaqSpan = styled.span`
	color: rgb(15, 167, 111);
`;
const FaqQuestions = styled.ul`
	list-style: none;
	max-width: 800px;
	margin: 0 auto;
`;
const FaqItem = styled.li`
	background-color: rgb(243, 249, 235);
	padding: 0 30px;
	border-radius: 4px;
	min-height: 60px;
	overflow: hidden;
	margin-bottom: 20px;
	transition: all 0.3s ease;
	cursor: pointer;
`;
const Content = styled.div`
	min-height: 75px;
	border-radius: 2px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const H3 = styled.h3`
	font-size: 16px;
	padding: 10px 0;
	font-weight: 400;
	font-family: "gorditaregular";
`;
const Arrow = styled.span`
	display: block;
	transition: all 0.5s ease 0s;
`;
const DownArrow = styled.img`
	height: 10px;
`;
const FaqPara = styled.p`
	font-size: 16px;
	color: rgb(84, 84, 84);
	overflow-y: scroll;
	height: 0;
	white-space: pre-line;
	font-size: "gorditaregular";
	margin-right: -50px;
	transition: all 0.5s ease;
	line-height: 1.4;
	&.active {
		height: auto;
		background-color: rgb(243, 249, 235);
	}
`;

export default Faq;
