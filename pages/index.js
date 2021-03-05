import { useAuth } from '../context/AuthProvider';


import MainHomePage from '../components/Home/index';

import {withAuthComponent} from '../HOC/withAuth';

const WithAuthHomePage = withAuthComponent(MainHomePage);

const Home = () => {
  const { isLogin } = useAuth();

  return <WithAuthHomePage isLogin={isLogin} />;
};

export default Home;
