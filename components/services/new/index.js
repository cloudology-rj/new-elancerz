import ServiceForm from '../serviceForm';
import { useQuery, useMutation } from 'react-query';
import { useAuth } from 'context/AuthProvider';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { createService } from '../../../api/queries';
import Loader from "react-loader-spinner";

import Alert from '@/components/global/Alert'
const NewServices = () => {


    const router = useRouter();
    const { user, token } = useAuth()
    const { mutateAsync, isLoading } = useMutation(createService)
    const [show, setshow] = React.useState(false)
    const [msg, setmsg] = React.useState('Please Complete the Required Fields Before Creating your Services.')

    if (user !== null) {

        const onFormSubmit = async (srvdata) => {

            // TODO:
            //  validation

            const data = { ...srvdata }

            if (data?.length > 0) {
                console.log(data)
                setmsg('Please Complete the Required Fields Before Creating your Services.')
                setshow(false)
            } else {

                if (data?.milestones?.length <= 0) {
                    setmsg('Please Add Milestones Before Creating your Services.')
                }
                setshow(true)
            }
            await mutateAsync({ token, data })
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
                <>
                    {
                        show &&
                        <AlertContainer>
                            <Alert
                                icon={'/icons/info-gray.svg'}
                                size={24}
                                msg={msg}
                                title={'CLOSE'}
                                action={() => setshow(false)}
                            />
                        </AlertContainer>



                    }
                    <ServiceForm login={user.id} onFormSubmit={onFormSubmit} isLoading={isLoading} Type={"New"} />
                </>
            )
        }

    } else {
        return null
    }


}

export default NewServices

export const AlertContainer = styled.div`
  width: 100%;
  display: grid;
  height: 15vh;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    height: 7vh;
  }
`;