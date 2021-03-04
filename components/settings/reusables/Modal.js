import { useState } from 'react';
import styled from 'styled-components';
import { ButtonOpacity } from '@/components/global/Button';

const StyledModal = styled.div`



  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(74, 82, 104, 0.9);
    opacity: 0;
    pointer-events: none;
  }
  .overlay.active {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(74, 82, 104, 0.9);
    opacity: 1;
    pointer-events: unset;
    display: grid;
    place-items: center;
    overflow: hidden;
    z-index: 100;

    .card {
      position: relative;
      background-color: white;
      padding: 3rem;
      width: 80vw;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      transform: translateY(500%);
      animation: float 500ms forwards;
      @media ${(props) => props.theme.mediaQueries.laptop} {
        max-width: 700px;
      }
      .close-btn {
        position: absolute;
        top: 0;
        right: 0;
      }
      .card-header {
        text-align: center;
      }
      .card-body {
        text-align: center;
        margin-top: 4rem;
        margin-bottom: 1rem;
      }
      .close-account-btn {
        margin-bottom: 1rem;
      }
    }
  }

  
`;

const Modal = (props) => {
  return (
    <StyledModal>
      <div className={props.modalActive ? 'overlay active' : 'overlay'}>
        <div className="modal">
          <div className="card">
            <ButtonOpacity
              className="close-btn"
              onClick={() => props.setModalActive(!props.modalActive)}
            >
              x
            </ButtonOpacity>
            {props.content}
          </div>
        </div>
      </div>
    </StyledModal>
  );
};
export default Modal;
