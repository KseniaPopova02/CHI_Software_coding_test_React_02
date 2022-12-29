import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../_shared/Button/Button";
import LoanModal from "./LoanModal";
import { useState } from "react";
import { numberWithCommas } from "../../utils";

const LoanWrapper = styled.div`
  border: 1px solid rgba(48, 50, 71, 0.1);
  padding: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  &:not(:first-child) {
    margin-top: 32px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const LoansTitle = styled.h4`
  font-size: 25px;
  line-height: 30px;

  font-weight: 600;
  @media (max-width: 590px) {
    font-size: 22px;
  }
`;

const LoansSubtitle = styled.div`
  @media (max-width: 590px) {
    font-size: 16px;
  }
`;

const BtnWrapper = styled.div`
  margin: auto 0;
`;

const LoansInvest = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #51a571;
  text-align: end;
  padding-bottom: 13px;
  @media (max-width: 590px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    text-align: start;
    padding-bottom: 0px;
  }
`;

const Loan = ({
  loan: {
    title,
    tranche,
    available,
    annualised_return,
    ltv,
    term_remaining,
    id,
    amountOfInvestment,
  },
  invest,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LoanWrapper>
      <div>
        <LoansTitle>{title}</LoansTitle>
        <LoansSubtitle>
          <p>tranche: {tranche}</p>
          <p>available: {`${numberWithCommas(available)}$`}</p>
          <p>annualised return: {annualised_return}</p>
          <p>ltv: {ltv}</p>
        </LoansSubtitle>
      </div>
      <BtnWrapper>
        {amountOfInvestment > 0 && <LoansInvest>Invested</LoansInvest>}
        <Button onClick={toggleModal}>Invest</Button>
        {isOpen && (
          <LoanModal
            invest={invest}
            onClose={toggleModal}
            title={title}
            available={available}
            endsIn={term_remaining}
            id={id}
          />
        )}
      </BtnWrapper>
    </LoanWrapper>
  );
};

export default Loan;

Loan.propTypes = {
  loan: PropTypes.shape({
    title: PropTypes.string,
    tranche: PropTypes.string,
    available: PropTypes.string,
    annualised_return: PropTypes.string,
    ltv: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  invest: PropTypes.func.isRequired,
};
