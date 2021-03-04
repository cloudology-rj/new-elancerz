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
} from './LatestTransactionStyles'

const TransactionItem = ({ transaction, isEmployeer }) => {
  const { imageUrl, name, serviceType, amount } = transaction
  
  return (
      <>
        <EachItem>
            <BoxLeft>
                <ImageWrapper>
                    <Image className="eachTransactionImage" src={imageUrl} height="48px" width="48px" />
                </ImageWrapper>
                <DetailWrapper>
                    <Title>{ name }</Title>
                    <PreTitle>{ serviceType }</PreTitle>
                </DetailWrapper>
            </BoxLeft>
            <BoxRight>
                <Amount>{isEmployeer ? '-' : '+'}${ amount }</Amount>
            </BoxRight>
        </EachItem>
        <style jsx global> {`
            .eachTransactionImage {
                border-radius: 50%;
            }
        `}
        </style>
    </>
  )
};

export default TransactionItem;
