import { useRouter } from 'next/router';

const ViewPage = () => {
  const router = useRouter();
  const {id} = router.query
  console.log(id);

  console.log(router)
  return <h1>USER Page</h1>;
};

export default ViewPage;
