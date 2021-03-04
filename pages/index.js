import { useAuth } from '../context/AuthProvider';


import MainHomePage from '../components/Home/index';

import WithAuth from '../HOC/withAuth';

const WithAuthHomePage = WithAuth(MainHomePage);

const Home = () => {
  const { isLogin } = useAuth();

  return <WithAuthHomePage isLogin={isLogin} />;
};

export default Home;
