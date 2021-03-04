import Image from 'next/image';
import { AlertCircle, MessageCircle, Check } from 'react-feather';

import {
    ProjectWrapper,
    Head,
    Left,
    Title,
    Name,
    Right,
    Amount,
    Body,
    Date,
    Content,
    Status,
    Bottom,
    Box,
    Milestone,
    MilesAmount,
    StatusTitle,
    StatusLabel,
    Button,
    EachProject,
    ActiveWrapper,
    CompletedWrapper,
} from './ProjectStyles'

const Project = ({ isActive }) => {
    return (
        <>
            <ProjectWrapper>
                {isActive && <ActiveWrapper>
                    <EachProject>
                        <Head>
                            <Left>
                                <Title>Logo Design</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Marilyn Calzoni</Name>
                            </Left>
                            <Right>
                                <Amount>$50</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Dec 12, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>3 of 5 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount>$30</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <AlertCircle color="#E1C340" />
                                <StatusTitle>Color Design ($10)</StatusTitle>
                                <StatusLabel>Active</StatusLabel>
                            </Status>

                            <Bottom>
                                <Button active>More</Button>
                                <Button><MessageCircle /><span>View Messages</span></Button>
                            </Bottom>
                        </Body>
                    </EachProject>
                    <EachProject>
                        <Head>
                            <Left>
                                <Title>Sketches and Wireframes</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Lincoln Saris</Name>
                            </Left>
                            <Right>
                                <Amount>$150</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Dec 5, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>1 of 2 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount>$0</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <Check color="#31D0AA" />
                                <StatusTitle>Initial sketch ($50)</StatusTitle>
                                <StatusLabel>Submitted</StatusLabel>
                            </Status>

                            <Bottom>
                                <Button active>More</Button>
                                <Button><MessageCircle /><span>View Messages</span></Button>
                            </Bottom>
                        </Body>
                    </EachProject>
                </ActiveWrapper>}
                {!isActive && <CompletedWrapper>
                    <EachProject completed={!isActive}>
                        <Head>
                            <Left>
                                <Title> <Check color="#31D0AA" /> Sketches and Wireframes</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Dulce Franci</Name>
                            </Left>
                            <Right>
                                <Amount>$150</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Dec 12, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>2 of 2 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount completed={!isActive}>$150</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <Check color="#31D0AA" />
                                <StatusTitle>Figma Wireframe ($100)</StatusTitle>
                                <StatusLabel>Completed</StatusLabel>
                            </Status>

                            <Bottom>
                                <Button active>More</Button>
                                <Button><MessageCircle /><span>View Messages</span></Button>
                            </Bottom>
                        </Body>
                    </EachProject>
                </CompletedWrapper>}
            </ProjectWrapper>
            <style jsx global> {`
            .eachProjectAvatar {
                border-radius: 50%;
            }
        `}
            </style>
        </>
    )
};

export default Project;
