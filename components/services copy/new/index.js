import ServiceForm from '../serviceForm';
import { useQuery, useMutation } from 'react-query';
import { useAuth } from 'context/AuthProvider';
import { useRouter } from 'next/router';

import { createService } from '../../../api/queries';
import Loader from "react-loader-spinner";

const NewServices = () => {


    const router = useRouter();
    const { user, token } = useAuth()
    const { mutateAsync, isLoading } = useMutation(createService)

    if (user !== null) {

        const onFormSubmit = async (data) => {

            const newData = { ...data, category_id: 2, user_id: user.id }
            await mutateAsync({ newData, token })
            router.push('/services')
        }
        if (isLoading) {
            return (
                <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Loader type="ThreeDots" color="#4CD7D0" height={50} width={50} /*timeout={3000}*/ />
                </div>
            )
        } else {
            return (
                <ServiceForm onFormSubmit={onFormSubmit} isLoading={isLoading} Type={"New"} />
            )
        }

    } else {
        return null
    }


}

export default NewServices