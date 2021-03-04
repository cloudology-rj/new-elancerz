import styled from 'styled-components';

import mixins from '../../../styles/mixins';

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 2.7em 1.6em;

  gap: 15px;
  margin: 20px 0;
`;

export const ExploreHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  button {
    margin-right: 7px;
  }
`;

export const YellowTextBackground = styled.span`
  background: ${(props) => props.theme.colors.quarternaryBrand};
  padding: 5px;
  display: inline-block;
`;

export const HeaderFlex = styled.div`
  ${mixins.flexBetween};
`;

export const Flexbetween = styled.div`
  ${mixins.flex}
  gap:6px;
`;
