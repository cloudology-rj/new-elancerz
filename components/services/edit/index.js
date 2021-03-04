import styled from 'styled-components';
import ServiceForm from '../serviceForm';
import { useQuery, useMutation } from 'react-query';
import { useAuth } from 'context/AuthProvider';
import { HeaderTwo } from '@/components/global/Text';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { getService, updateService } from '../../../api/queries';
import Loader from "react-loader-spinner";

const EditServices = ({ srvID }) => {

    const router = useRouter()
    const { user, token } = useAuth()

    const { data: servicesData, isError, error, isLoading } = useQuery(
        ['services'], () => getService(token, srvID)
    )


    if (isError) {

        return (
            <NotFound>
                <HeaderTwo>
                    Sorry, something went wrong with your request
                </HeaderTwo>
            </NotFound>
        )

    } else {

        const { mutateAsync, isLoading: isMutating } = useMutation(updateService)

        const onFormSubmit = async (data) => {

            const newData = { ...data, category_id: 2, user_id: user.id }
            await mutateAsync({ newData, token, srvID })
            router.push('/services')
        }

        if (isLoading) {
            return (
                <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Loader type="ThreeDots" color="#4CD7D0" height={50} width={50} /*timeout={3000}*/ />
                </div>
            )
        } else {
            // return null
            return (
                <ServiceForm defaultValues={servicesData} onFormSubmit={onFormSubmit} isLoading={isLoading} Type={"Edit"} />
            )
        }

    }


}

export default EditServices


export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;