import styled, { css } from 'styled-components';
import Image from 'next/image';

export const UploadProf = styled.div`
  position: relative;  
  top: 174px;
  right: -174px;
  width: 45px;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 56px;
  }
  
`


export const Position = styled.h2`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.s3};
  line-height: 1em;
  text-align: center;
  margin: 4px 0;
`;

export const CardContainer = styled.div`
  text-align: center;  
  padding: 32px 12px;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 32px;
  }
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px 0 rgba(0,0,0, 0.2);
  min-width: 300px;
  max-width: 352px;
  max-height: 534px;
`;






export const TextEdit = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
`

export const CardImage = styled.img`
border-radius: 50%;
}
`


export const EditCardImage = styled.div`
  border-radius: 50%;
  height: ${({ height }) => { return height }};
  width: ${({ width }) => { return width }};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url("${({ img }) => { return img }}");
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05)) , url("${({ img }) => { return img }}");

  ${({ state }) =>
    state &&
    css`
        &: hover {
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)) , url("${({ img }) => { return img }}");
          cursor: pointer;
        }
    `}


`


export const FlexContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`