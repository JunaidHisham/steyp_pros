import React from "react";
import styled from "styled-components";
import "../../App.css";

function BestRegards() {
	return (
		<>
			<BestRegardsContainer>
				<BestRegardsContainerWrapper>
					<BestRegardsHeading>
						<Heading>
							<Color>TEFUN-ന് </Color>
							<br /> <Small>ആശംസകളോടെ</Small>
						</Heading>
					</BestRegardsHeading>
					<BestRegardsContents>
						<BestRegardsUl>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Jayasurya_01.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Jayasurya</ActorName>
										<Designation>Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Antony_vertical_thumb_.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Antony Varghese</ActorName>
										<Designation>Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Major_Ravi_02.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Major Ravi</ActorName>
										<Designation>Director & Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Niranjana_01.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Niranjana Anoop</ActorName>
										<Designation>Actress</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Bibin-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Bibin George</ActorName>
										<Designation>Script writer & Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Sandra-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Sandra Thomas</ActorName>
										<Designation>Producer & Actress</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Vishnu-unnikrishnan-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Vishnu Unnikrishnan</ActorName>
										<Designation>Actor & Screen writer</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Maniyanpilla-Raju-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Maniyanpilla Raju</ActorName>
										<Designation>Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Gowri-Nandha-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Gowri Nangha</ActorName>
										<Designation>Actress</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
							<BestRegardsLi className="best-regards">
								<ActorImage src={require("../images/Hareesh-01-min.jpg")} />
								<GreyShade>
									<ActorsContent>
										<ActorName>Hareesh Kanaran</ActorName>
										<Designation>Actor</Designation>
										<WatchStory className="watch-story">
											<WatchStoryPlay>
												<PlayButton src={require("../images/play-black.svg").default} alt="" />
											</WatchStoryPlay>
											Watch Story
										</WatchStory>
									</ActorsContent>
								</GreyShade>
							</BestRegardsLi>
						</BestRegardsUl>
					</BestRegardsContents>
				</BestRegardsContainerWrapper>
			</BestRegardsContainer>
		</>
	);
}

const BestRegardsContainer = styled.section``;
const BestRegardsContainerWrapper = styled.section`
	width: 90%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 100px;
`;
const BestRegardsHeading = styled.div`
	text-align: center;
	margin-bottom: 50px;
`;
const Heading = styled.h2`
	font-size: 30px;
`;
const Color = styled.span`
	color: rgb(15, 167, 111);
`;
const Small = styled.small`
	font-size: smaller;
`;
const BestRegardsContents = styled.div``;
const BestRegardsUl = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	list-style: none;
`;
const BestRegardsLi = styled.li`
	width: calc(25% - 22px);
	position: relative;
	margin-right: 10px;
	margin-left: 10px;
	margin-bottom: 30px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	&:hover span.watch-story {
		height: 50px;
		opacity: 1;
	}
	&:nth-child(4n) {
		margin-right: 0;
	}
`;
const GreyShade = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 3px;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 13px;
`;
const ActorImage = styled.img`
	width: 100%;
	border-radius: 15px;
`;
const WatchStory = styled.span`
	width: 80%;
	margin: 0 auto;
	background-color: #fff;
	color: #000;
	height: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	text-transform: uppercase;
	font-size: 13px;
	transition: 0.3s ease-in;
	opacity: 0;
`;
const WatchStoryPlay = styled.span`
	width: 15px;
	margin-right: 10px;
`;
const PlayButton = styled.img`
	width: 100%;
	display: block;
`;
const ActorsContent = styled.div`
	position: absolute;
	bottom: 30px;
	left: 0;
	right: 0;
	color: #fff;
	text-align: center;
`;
const ActorName = styled.h4`
	font-size: 22px;
	color: #fff;
	padding: 0 35px;
	margin-bottom: 5px;
	font-family: "gorditaregular";
`;
const Designation = styled.p`
	margin-bottom: 10px;
`;

export default BestRegards;
