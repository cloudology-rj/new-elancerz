import Image from 'next/image';
import { useRouter } from 'next/router';
import { Clock, AlertCircle, MessageCircle, Check } from 'react-feather';

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
} from './EprojectStyles'

const Eproject = ({ isActive }) => {


    const router = useRouter();



    return (
        <>
            <ProjectWrapper>
                {isActive && <ActiveWrapper>
                    <EachProject>
                        <Head>
                            <Left>
                                <Title>Mobile App Development</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Zain Lubin</Name>
                            </Left>
                            <Right>
                                <Amount>$400</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Nov 19, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>3 of 8 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount>$150</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <Clock color="#B3b3B3" />
                                <StatusTitle>Profile Page ($50)</StatusTitle>
                                <StatusLabel>Active</StatusLabel>
                            </Status>

                            <Bottom>
                                <Button onClick={() => router.push('/project/employer/view/1')} active>More</Button>
                                <Button><MessageCircle /><span>View Messages</span></Button>
                            </Bottom>
                        </Body>
                    </EachProject>
                    <EachProject>
                        <Head>
                            <Left>
                                <Title>Back-end Development</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Giana Schleifer</Name>
                            </Left>
                            <Right>
                                <Amount>$450</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Sept 9, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>7 of 9 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount>$350</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <AlertCircle color="#E6B800" />
                                <StatusTitle>User Accounts API ($50)</StatusTitle>
                                <StatusLabel>Submitted</StatusLabel>
                            </Status>

                            <Bottom>
                                <Button onClick={() => router.push('/project/employer/view/1')} active>More</Button>
                                <Button><MessageCircle /><span>View Messages</span></Button>
                            </Bottom>
                        </Body>
                    </EachProject>
                </ActiveWrapper>}
                {!isActive && <CompletedWrapper>
                    <EachProject completed={!isActive}>
                        <Head>
                            <Left>
                                <Title> Graphic Illustrations</Title>
                                <Image className="eachProjectAvatar" src="/images/sample.jpg" height="40px" width="40px" />
                                <Name>Zain Lubin</Name>
                            </Left>
                            <Right>
                                <Amount>$200</Amount>
                            </Right>
                        </Head>
                        <Body>
                            <Date>Started Aug 12, 2020</Date>
                            <Content>
                                Tristique ornare ut imperdiet lectus porttitor in enim quis. Egestas bibendum leo, ac id est in nisl risus purus. Eu facilisis est proin velit parturient aliquet. Donec lorem diam elit non risus. Mauris lobortis aliquet feugiat tellus ac fringilla. Adipiscing mi consequat libero ipsum elementum. Odio leo, scelerisque adipiscing in nulla urna, tincidunt sit tincidunt. Amet vel, maecenas scelerisque eget nisl. Diam eros, lectus aliquet risus convallis sed at id. Aenean enim ac euismod nisl.
                    </Content>
                            <Bottom>
                                <Box><Milestone>2 of 2 milestones completed</Milestone></Box>
                                <Box><Milestone>Milestones Paid</Milestone><MilesAmount completed={!isActive}>$200</MilesAmount></Box>
                            </Bottom>

                            <Status>
                                <Check color="#31D0AA" />
                                <StatusTitle>Final Illustrations ($50)</StatusTitle>
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

export default Eproject;
