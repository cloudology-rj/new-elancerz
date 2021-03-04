import { useRouter } from 'next/router';

import ViewProjectEmployer from '../../../../components/projects/employer/viewProject/index';
import ViewProjectFreelancer from '../../../../components/projects/freelancer/viewProject/index';
import Layout from '../../../../components/Base/Layout/Layout';

import { RoleContext } from '../../../../context/RoleProvider';


const EditPage = (props) => {
  const router = useRouter();

  const { role, id } = router.query;

  return (
    <RoleContext.Provider value={role}>
      <Layout>
        {role === 'freelancer' ? (
          <ViewProjectFreelancer />
        ) : (
            <ViewProjectEmployer />
          )}
      </Layout>
    </RoleContext.Provider>
  );
};

export default EditPage;
