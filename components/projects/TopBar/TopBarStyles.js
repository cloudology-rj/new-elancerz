import styled from 'styled-components';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';

export const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
  gap: .5em;
  // flex-basis: 51%;
  flex-wrap: wrap;
`;

export const TopBarTitle = styled(HeaderTwo)`
  font-size: ${(props) => props.theme.fontSizes.s3};
  @media ${(props) => props.theme.mediaQueries.laptop} {
    font-size: ${(props) => props.theme.fontSizes.s2};
  }
`;



// .flex-container > div {
//   flex: 1 0 26%;
// }



export const Tab = styled.div`
  color: black;
  display: flex;
`;
