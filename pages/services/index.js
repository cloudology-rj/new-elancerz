import MyServices from 'components/services/index';
import Layout from '../../components/Base/Layout/Layout';
import Container from '../../components/global/Container';
import { useAuth } from "../../context/AuthProvider";
const MyProfile = () => {

    // const { user } = useAuth()
    // if (user == null) {
    //     return null
    // } else {
    return <Layout><Container><MyServices /></Container></Layout>
    // }

}

export default MyProfile;

