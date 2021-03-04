import Image from 'next/image';
import styled from 'styled-components';

const Person = ({ imageUrl }) => {
  return (
    <>  
        <ImageWrapper>
            <Image className="serviceInquiryPersonImage" src={imageUrl} height="48px" width="48px"  alt="Picture of a person"/>   
            <Circle />
        </ImageWrapper>
        <style jsx global> {`
            .serviceInquiryPersonImage {
            border-radius: 50%;
            }
        `}
        </style>
    </>
  )
};

export default Person;



export const ImageWrapper = styled.span`
    position:relative;
    display:inline-block;
    margin-right:10px;
    margin:10px 10px 10px 0;
`;


export const Circle = styled.span`
    display:block;
    position:absolute;
    top:0;
    right:0;
    width:12px;
    height:12px;
    border-radius:50%;
    background:${props => props.theme.colors.primaryBrand};
    z-index:3px;
`;
