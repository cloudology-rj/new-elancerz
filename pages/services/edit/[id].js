import EditServices from 'components/services/edit/';
import Layout from '../../../components/Base/Layout/Layout';
import Container from '../../../components/global/Container';

import { useRouter } from 'next/router';

const MyProfile = () => {
    const router = useRouter()
    const { id } = router.query

    if (router.isReady) {
        return <Layout><Container><EditServices srvID={id} /></Container></Layout>
    } else {
        return null
    }
}

export default MyProfile;
