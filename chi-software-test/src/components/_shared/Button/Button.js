import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//Styled btn
const StyledBtn = styled.button`
  padding: 16px 32px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: #f6e308;
  border: none;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background-color: #e5d736;
  }
  @media (max-width: 590px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

const Button = ({ children, onClick, className, disabled }) => {
  const handleClick = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <StyledBtn onClick={handleClick} className={className} disabled={disabled}>
      {children}
    </StyledBtn>
  );
};

export default Button;

Button.defaultProps = { onClick: () => {}, className: "", disabled: false };

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
