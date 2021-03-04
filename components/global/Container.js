import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1440px) {
    padding: 0 32px;
  }
  @media (max-width: 480px) {
    padding: 0 24px;
  }
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
