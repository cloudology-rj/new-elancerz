import PropTypes from 'prop-types';
import { useContext } from 'react';
import Router from 'next/router';

import { Subtitle } from '@/components/global/Text';
import Container from '@/components/global/Container';
import { ButtonPrimary } from '@/components/global/Button';
import Carousel, { consts } from 'react-elastic-carousel';
import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import { useAuth } from '../../../context/AuthProvider';
import { IsMobileContext } from '../../../context/IsMobile';

/*

Contains the name  of a  category and its freelancers
on the Main Page
*/

/*

*/

const FreelancerCategory = ({ title, openAuthModal, setUser }) => {
  const { isLogin } = useAuth();
  const [isMobile] = useContext(IsMobileContext);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 3 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 3 },
  ];

  const redirect = (id) => {
    if (!isLogin) {
      if (!isMobile) {
        openAuthModal(true);
      } else {
        Router.push('/account/sign-in');
      }
      setUser(id);
    } else {
      Router.push(`/profile/view/${id}`);
    }
  };

  return (
    <>
      <Container>
        <Subtitle>{title}</Subtitle>
      </Container>

      <br />
      <Carousel breakPoints={breakpoints} itemPadding={[0, 20]}>
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <ButtonPrimary>More</ButtonPrimary>
      </Carousel>
    </>
  );
};

FreelancerCategory.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FreelancerCategory;
