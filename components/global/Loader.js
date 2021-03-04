import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    border: 5px solid ${(props) => props.theme.colors.accent};
    border-top: 5px solid ${(props) => props.theme.colors.primaryBrand};
    border-radius: 50%;
    width: 48px;
    height: 48px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Container = () => {
  return (
    <MainContainer>
      <div className="loader"></div>
    </MainContainer>
  );
};

const LoaderContainer = styled.div`
  border: 5px solid ${(props) => props.theme.colors.accent};
  border-top: 5px solid ${(props) => props.theme.colors.primaryBrand};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => <LoaderContainer></LoaderContainer>;

export default Container;
