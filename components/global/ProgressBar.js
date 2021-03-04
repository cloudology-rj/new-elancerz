import React from 'react';
import styled from 'styled-components';

import { PreTitle } from '@/components/global/Text';
import mixins from '../../styles/mixins';

const ProgressContainer = styled.div`
  margin: 20px 0;
  ${mixins.flex}
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: row;
    gap: 10px;
    flex: 1;
  }
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.accent};
  margin-bottom:10px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 50%;
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -4px;
    width: 60%;
    height: 16px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.primaryBrand};
  }
`;

const ProgressBar = (props) => {
  return (
    <ProgressContainer>
      <Progress></Progress>
      <PreTitle>3 of 5 Milestones completed</PreTitle>
    </ProgressContainer>
  );
};

ProgressBar.propTypes = {};

export default ProgressBar;
