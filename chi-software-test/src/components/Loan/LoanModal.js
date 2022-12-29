import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../_shared/Button/Button";
import Modal from "../_shared/Modal/Modal";
import { numberWithCommas } from "../../utils";

const ModalContent = styled.div`
  font-size: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 35px;
`;
const ModalSubTitle = styled.h3`
  font-size: 30px;
`;

const InvestInput = styled.input`
  width: 100%;
  padding: 16px 32px;
  margin-right: 30px;
  border: 1px solid rgba(48, 50, 71, 0.1);
  border-radius: 5px;
  text-align: left;
  padding-left: 32px;
  font-size: 22px;
  text-align: right;
  @media (max-width: 1040px) {
    margin-bottom: 10px;
    padding: 10px 20px;
  }
`;

const ModalForm = styled.form`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;
const isValidInvest = (available, investValue) =>
  Number(available.replace(",", "")) - investValue >= 0;

const LoanModal = ({ title, available, endsIn, onClose, invest, id }) => {
  const [investValue, setInvestValue] = useState("");

  const handleChange = (e) => {
    setInvestValue(e.target.value);
  };

  const handleInvest = (e) => {
    e.preventDefault();
    if (isValidInvest(available, investValue)) {
      invest(id, investValue);
      onClose();
      return;
    }
    alert("You don't have enough money:(");
  };

  const timeRemainingNum = Math.ceil(Number(endsIn) / 86400);
  const timeRemaining = `${timeRemainingNum} days`;

  return (
    <Modal onClose={onClose}>
      <ModalContent>
        <ModalTitle>Invest in Loan</ModalTitle>
        <p>{title}</p>
        <p>Amount available: {numberWithCommas(available)}$</p>
        <p>Loan ends in: {timeRemaining}</p>
        <ModalSubTitle>Investment amount</ModalSubTitle>
        <ModalForm onSubmit={handleInvest}>
          <InvestInput
            type="number"
            placeholder="1,000"
            onChange={handleChange}
            value={investValue}
          />
          <Button type="submit">Invest</Button>
        </ModalForm>
      </ModalContent>
    </Modal>
  );
};

export default LoanModal;

LoanModal.propTypes = {
  title: PropTypes.string.isRequired,
  available: PropTypes.string.isRequired,
  endsIn: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  invest: PropTypes.func.isRequired,
};
