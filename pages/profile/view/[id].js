import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useAuth } from '../../../context/AuthProvider';
import { fetchProfileFreelancer } from '../../../api/queries';

import Layout from '../../../components/Base/Layout/Layout';
import Profile from '../../../components/profile/viewProfile/';

import WithLoading from '../../../HOC/WithLoadingAndError';
import WithAuth from '../../../HOC/withAuth';

const ProfileWithLoading = WithLoading(Profile);
const ProfileWithAuth = WithAuth(ProfileWithLoading);

const FreelanceProfile = () => {
  const router = useRouter();

  const { token, isLogin, user } = useAuth();

  const { id } = router.query;
  const isIdAvailable = id !== undefined && token !== null;

  if (user && user.id === id) {
    router.back();
  }

  const { isLoading, error, data } = useQuery(
    'profilefreelancer',
    async () => await fetchProfileFreelancer(id, token),
    { enabled: isIdAvailable }
  );

    // console.log(id, user.id, isLogin);

  return (
    <Layout>
      <ProfileWithAuth
        isLogin={isLogin}
        error={error}
        errorComponent={<h1>Sorry Something went wrong with your request</h1>}
        isLoading={isLoading}
        {...data}
      />
    </Layout>
  );
};

export default FreelanceProfile;
