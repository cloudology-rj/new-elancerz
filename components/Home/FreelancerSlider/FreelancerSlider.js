import PropTypes from 'prop-types';

import { Subtitle } from '@/components/global/Text';
import Container from '@/components/global/Container';
import { ButtonPrimary } from '@/components/global/Button';
import Carousel, { consts } from 'react-elastic-carousel';
import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

/*

Contains the name  of a  category and its freelancers
on the Main Page
*/

/*

*/

const FreelancerCategory = ({ title }) => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <>
      <Container>
        <Subtitle>{title}</Subtitle>
      </Container>

      <br />
      <Carousel breakPoints={breakpoints} itemPadding={[0, 20]} itemsToShow={5}>
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <FreelancerCard />
        <ButtonPrimary>More</ButtonPrimary>
      </Carousel>
    </>
  );
};

FreelancerCategory.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FreelancerCategory;
