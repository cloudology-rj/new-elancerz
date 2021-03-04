import { useRouter } from 'next/router';

import EditProjectEmployer from '../../../../components/projects/employer/editProject/';
import EditProjectFreelancer from '../../../../components/projects/freelancer/editProject/';
import Layout from '../../../../components/Base/Layout/Layout';

import { RoleContext } from '../../../../context/RoleProvider';

const EditPage = (props) => {
  const router = useRouter();

  const { id, role } = router.query;

  return (
    <RoleContext.Provider value={role}>
      <Layout>
        {role === 'freelancer' ? (
          <EditProjectFreelancer id={id} />
        ) : (
          <EditProjectEmployer id={id} />
        )}
      </Layout>
    </RoleContext.Provider>
  );
};

export default EditPage;
