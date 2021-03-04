import PropTypes from 'prop-types';
import Image from 'next/image';
import styled from 'styled-components';
import { SmallText } from '@/components/global/Text';
import { ButtonSecondary } from '@/components/global/Button';

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.quarternaryBrand};
  max-height: auto;
  flex-direction: column;
  padding: 12px 24px;
  box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  @media ${(props) => props.theme.mediaQueries.laptop} {
    max-height: 70px;
    flex-direction: row;
    padding: 12px 30px;
  }
  position: absolute;
  left: 0;
  right: 0;
`;

const LeftComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5em;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-bottom: 0;
  }
`;

const RightComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 10%;
  }
`;

const LeftIcon = styled(Image)`
  min-height: 24px;
  min-width: 24px;
`;

const LeftMsg = styled(SmallText)`
  color: ${(props) => props.theme.colors.text};
`;

const AlertComponent = ({ icon, size, msg, title, action }) => {
  return (
    <MainContainer>
      <LeftComponent>
        {icon && <LeftIcon src={icon} width={size} height={size} />}
        &emsp;
        <LeftMsg>{msg}</LeftMsg>
      </LeftComponent>
      <RightComponent>
        {action && <ButtonSecondary onClick={action}>{title}</ButtonSecondary>}
      </RightComponent>
    </MainContainer>
  );
};

export default AlertComponent;
