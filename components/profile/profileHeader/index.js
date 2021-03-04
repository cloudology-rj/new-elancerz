import React from 'react';
import PropTypes from 'prop-types';

import ButtonsHeader from '../ButtonsHeader/index';
import ProfileCard from '../../Cards/ProfileCard/ProfileCard';

import { FlexCenter, HeroImage } from './profileHeaderStyles';

const ProfileHeader = ({ role, toggle, isPublic, ...props }) => {
  const joinedDate = new Date(props?.created_at);
  const { first_name, last_name, avatar, title, username } = props;
  return (
    <HeroImage>
      <ButtonsHeader role={role} isPublic={isPublic} toggle={toggle} />

      <FlexCenter>
        <ProfileCard
          img={
            avatar
              ? avatar
              : 'https://via.placeholder.com/500x500.png?text=Profile+Image'
          }
          fullname={
            !first_name && !last_name
              ? 'First & last Name'
              : `${first_name} ${last_name}`
          }
          title={title ? title : null}
          username={username ? title : null}
          star={0}
          rating={0}
          joined={joinedDate.toDateString()}
        />
      </FlexCenter>
    </HeroImage>
  );
};

ProfileHeader.propTypes = {};

export default ProfileHeader;
