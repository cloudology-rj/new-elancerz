import { useState } from 'react';
import { useRouter } from 'next/router';

import styled from 'styled-components';
import { HeaderThree } from '@/components/global/Text';

import ProfileHeader from '../profileHeader';
import Reviews from '../Reviews/';
import GetQuote from '../getQuote/';
import Services from '../services/';

import { ProfileContainer, BodyContainer, Paragraphs } from '../ProfileStyles';

import { useAuth } from "../../../context/AuthProvider";
const Profile = ({ ...props }) => {
  const { services, about } = props;
  const { token, user } = useAuth()
  // route
  const router = useRouter();
  // publicview
  const [isPublic, setIsPublic] = useState(false);
  const toggle = () => setIsPublic(!isPublic);


  // console.log(props)

  if (user == null) {
    return null
  } else {


    const selectedUser = props?.first_name + ' ' + props?.last_name
    const selectedUserID = props?.id
    const loginUserID = user?.id


    return (
      <ProfileContainer>
        <ProfileHeader
          {...props}
          role="view"
          toggle={toggle}
          isPublic={isPublic}
        />

        <BodyContainer>
          <HeaderThree>About</HeaderThree>
          <Paragraphs>
            {about ? about : 'Freelancer has not specified any description'}
          </Paragraphs>
        </BodyContainer>
        {services && <Services services={services} user={selectedUser} loginUserID={loginUserID} />}
        <br />

        <BodyContainer>
          <GetQuote isPublic={isPublic} id={selectedUserID} login={loginUserID} token={token} />
          <Reviews />
        </BodyContainer>
      </ProfileContainer>
    );
  }
};

export default Profile;

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('/images/banner.png');
  height: 480px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 1.5em;

  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin: 0 1.5em 9em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    margin: 0 1.5em 12em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    margin: 0 1.5em 12em 1.5em;
  }
`;
