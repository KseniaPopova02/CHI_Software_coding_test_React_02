import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(26, 26, 26, 0.5);

  z-index: 999;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 620px;
  border-radius: 5px;
  background-color: #fff;
  z-index: 1000;

  @media (max-width: 760px) {
    width: 85vw;
  }
`;

const ModalContent = styled.div`
  position: relative;
  padding: 64px;
  @media (max-width: 760px) {
    padding: 16px;
  }
`;

const CrossIcon = styled.span`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 30px;

  ::before {
    content: "x";
    color: #303247;
  }
`;

const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <ModalWrapper>
        <ModalContent>
          <CrossIcon onClick={onClose} />
          {children}
        </ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
