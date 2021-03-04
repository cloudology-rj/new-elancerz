import Image from 'next/image';

import CreditCard from '../../../public/illustrations/card-payment.svg';

import { 
    Wrapper,
    BoxWrapper,
    BoxLeft,
    BoxRight,
    Heading,
    Value,
    Percentage
} from './AccountDetailStyles'

const AccountDetails = ({ accountLabel, accountImageUrl, percent, acountAmount, isFreelancer }) => {

  return (<>
        <Wrapper>
            <CreditCard />
            <Heading>{ accountLabel }</Heading>
            <BoxWrapper>
                <BoxLeft>
                    <Value>$ { acountAmount }</Value>
                </BoxLeft>
                <BoxRight>
                    { isFreelancer ? <Image src="/icons/doubleArrowUpSuccess.svg" height="24px" width="24px" /> : <Image src="/icons/doubleArrowDown.svg" height="24px" width="24px" />}
                    <Percentage doRed={ !isFreelancer }>{ percent }%</Percentage>
                </BoxRight>
            </BoxWrapper>
        </Wrapper>
        <style jsx global> {`
            .accountDetailsImage {
                margin:0 auto;
                display:block;
                float:none;
            }
        `}
        </style>
        </>
  )
};

export default AccountDetails;
