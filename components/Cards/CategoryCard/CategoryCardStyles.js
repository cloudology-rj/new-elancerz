import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  text-align: center;
  border-radius: 10px;
  cursor:pointer;
`;

export const CategoryImage = styled.div`
  border-radius: 10px;
  height: 200px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    height: ${(props) => (props.size === 'big' ? '300px' : '200px')};
  }
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;
export const CategoryContent = styled.div`
  padding: 7px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
