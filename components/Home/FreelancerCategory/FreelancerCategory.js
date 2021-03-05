import { useContext } from 'react';
import Router from 'next/router';

import { Subtitle } from '@/components/global/Text';

import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import {
  FreelancersContainer,
  FreelanceCategoryContainer,
} from './FreelancerCategoryStyles';

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

  const redirect = (id) => {
    // if (!isLogin) {
    //   if (!isMobile) {
    //     openAuthModal(true);
    //   } else {
    //     Router.push('/account/sign-in');
    //   }
    //   setUser(id);
    // } else {
    //   Router.push(`/profile/view/${id}`);
    // }
  };

  return (
    <FreelanceCategoryContainer>
      <Subtitle>{title}</Subtitle>
      <br />
      <FreelancersContainer>
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
        <FreelancerCard redirect={() => redirect(15)} />
      </FreelancersContainer>
    </FreelanceCategoryContainer>
  );
};

FreelancerCategory.propTypes = {};

export default FreelancerCategory;
