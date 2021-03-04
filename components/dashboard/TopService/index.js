import Image from 'next/image';
import { ButtonPrimary } from "@/components/global/Button"
import {
    Wrapper,
    BoxLeft,
    BoxRight,
    Title
} from './TopServiceStyles'
import { useRouter } from 'next/router';

const TopService = ({ title, link, buttonText }) => {

    const router = useRouter();
    const gotoServices = (e) => {
        router.push('/services')
    }

    return (
        <Wrapper>
            <BoxLeft>
                <Image src="/illustrations/search-illustration.svg" height="165px" width="160px" />
            </BoxLeft>
            <BoxRight>
                <Title>{title}</Title>
                {/* <ButtonPrimary href={link}>{ buttonText }</ButtonPrimary> */}
                <ButtonPrimary onClick={gotoServices}>{buttonText}</ButtonPrimary>
            </BoxRight>
        </Wrapper>
    )
};

export default TopService;
