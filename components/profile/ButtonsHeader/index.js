import Router from 'next/router';
import PropTypes from 'prop-types';

import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
} from '@/components/global/Button';

import { Flex } from '../../../styles/reusableStyles';

import {
  ButtonIcon,
  ExitPublicView,
  ProfileBannerButtons,
} from './ButtonHeaderStyles';

const ButtonsHeader = ({ isPublic, role, toggle }) => {
  return role === 'view' ? null : isPublic ? (
    <ExitPublicView>
      <ButtonSecondary onClick={toggle}>
        <Flex gap="5px">
          <ButtonIcon />
          &nbsp;&nbsp;EXIT PUBLIC VIEW
        </Flex>
      </ButtonSecondary>
    </ExitPublicView>
  ) : (
    <ProfileBannerButtons>
      <ButtonPrimary onClick={toggle}>
        <Flex gap="5px">
          <ButtonIcon white={true} />
          &nbsp;&nbsp;PUBLIC VIEW
        </Flex>
      </ButtonPrimary>
      <ButtonSecondary onClick={() => Router.push('/profile/edit')}>
        EDIT PROFILE
      </ButtonSecondary>
    </ProfileBannerButtons>
  );
};

ButtonsHeader.propTypes = {
  isPublic: PropTypes.bool,
};

export default ButtonsHeader;
