import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-wrap: wrap;
  }

  margin: 20px 0;
`;
