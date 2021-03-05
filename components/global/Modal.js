import Image from 'next/image';
import styled, { css, keyframes } from 'styled-components';
import { ButtonOpacity } from '@/components/global/Button';

const showUp = keyframes`
 from {
      transform: translateY(500%);
    }
    100% {
      transform: translateY(0);
    }
`;

const StyledClose = styled(ButtonOpacity)`
  padding: 1em;
  position: absolute;
  top: 0;
  right: 0;
  margin: 1em;
`;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(22 28 51 / 84%);
  opacity: 0;
  pointer-events: none;
  display: grid;
  place-items: center;
  overflow: hidden;

  ${(props) =>
    props.active &&
    css`
      position: fixed;

      opacity: 1;
      pointer-events: unset;

      overflow: hidden;
      z-index: 999;
    `}
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 1rem;
  width: 90vw;
  border: 1px solid rgba(14, 19, 44, 0.05);
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transform: translateY(500%);

  ${(props) =>
    props.active &&
    css`
      animation: ${showUp} 500ms forwards;
    `}
  @media ${(props) => props.theme.mediaQueries.laptop} {
    max-width: 540px;
    padding: 2rem;
  }
`;

const Modal = ({ modalActive, setModalActive, content }) => {
  return (
    <ModalOverlay active={modalActive}>
      <ModalContainer active={modalActive}>
        <StyledClose
          className="close-btn"
          onClick={() => setModalActive(!modalActive)}
        >
          <Image src="/icons/close-primary.svg" width={14} height={14} />
        </StyledClose>
        {content}
      </ModalContainer>
    </ModalOverlay>
  );
};
export default Modal;
