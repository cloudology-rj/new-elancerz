import Image from 'next/image';

import { 
    EachItem,
    BoxLeft,
    ImageWrapper,
    DetailWrapper,
    Title,
    PreTitle,
    BoxRight,
    Amount
} from './EarningSpendingStyles'

const ServiceItem = ({ service }) => {
    const {  imageUrl, serviceName, serviceType, amount } = service
  return (
      <>
        <EachItem>
            <BoxLeft>
                <ImageWrapper>
                    <Image className="eachServiceImage" src={ imageUrl } height="48px" width="48px" />
                </ImageWrapper>
                <DetailWrapper>
                    <Title>{ serviceName }</Title>
                    <PreTitle>{ serviceType }</PreTitle>
                </DetailWrapper>
            </BoxLeft>
            <BoxRight>
                <Amount>${amount}</Amount>
            </BoxRight>
        </EachItem>
        <style jsx global> {`
            .eachServiceImage {
                border-radius: 12px;
            }
        `}
        </style>
    </>
  )
};

export default ServiceItem;
