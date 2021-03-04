import styled from 'styled-components';
import Layout from '../../components/Base/Layout/Layout';
import EditProfile from 'components/profile/editProfile/EditProfile';
import { HeaderTwo } from '@/components/global/Text';

import firebase from 'firebase/app';
import 'firebase/auth';

import { useQuery } from 'react-query';
import { fetchProfile } from '../../api/queries'
import WithLoadingAndError from '../../HOC/WithLoadingAndError';

import { useAuth } from '../../context/AuthProvider';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const ProfileWithLoading = WithLoadingAndError(EditProfile);


const MyProfile = () => {

    const [token, setToken] = useLocalStorage('elancerztoken', null);

    const { isLoading, isError, error, data: profileData } = useQuery(
        'EditprofileData', () => fetchProfile(token)
    );

    if (isError) {

        return (
            <Layout>
                <NotFound>
                    <HeaderTwo>
                        Sorry, something went wrong with your request
                    </HeaderTwo>
                </NotFound>
            </Layout>
        )

    } else {

        return <Layout><EditProfile isLoading={isLoading} user={profileData} token={token} /></Layout>

    }


};

export default MyProfile;

export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;
