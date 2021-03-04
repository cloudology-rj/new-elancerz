import Image from 'next/image';
import { ButtonPrimary } from "@/components/global/Button"
import { 
    Wrapper,
    Text,
    Inquiry,
    Title
} from './ServiceInquiryStyles'

import Person from './Person';
import { useRouter } from 'next/router';

const ServiceInquiry = ({ inquiryTitle, inquiryLink,  inquiryButtonText, people, shortText }) => {

    const router = useRouter();
    const gotoMsg = (e) => {
        if(inquiryButtonText=="Check Milestone"){
            router.push('/profile')
        }else{
            router.push('/messages')
        }
    }

  return (
        <Wrapper>
            <Image src="/illustrations/inquiry-illustration.svg" height="280px" width="400px" />
            <Title>{ inquiryTitle }</Title>
            <Inquiry>
                { people && people.map((person, index) => <Person key={index} imageUrl={person.imageUrl} />)}
            </Inquiry>
            <Text>{ shortText }</Text>
            {/* <ButtonPrimary href={inquiryLink}>{ inquiryButtonText }</ButtonPrimary> */}
            <ButtonPrimary onClick={gotoMsg}>{ inquiryButtonText }</ButtonPrimary>
        </Wrapper>
  )
};

export default ServiceInquiry;
