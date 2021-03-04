import { useRouter } from 'next/router';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

import Container from '@/components/global/Container';


import Layout from '../../components/Base/Layout/Layout';
import Account from '../../components/account';

const SignupMobile = (props) => {
  const router = useRouter();
  const { section } = router.query;
  console.log(section)

  return (
    <Layout>
      <Container>
        <Account section={section} />
      </Container>
    </Layout>
  );
};

export default SignupMobile;