import styled from "styled-components";
import PropTypes from "prop-types";

//Loans style
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
//LoansTitle style
const LoansTitle = styled.h4`
  font-size: 25px;
  line-height: 30px;
  padding-bottom: 16px;
  font-weight: 600;
  @media (max-width: 590px) {
    font-size: 22px;
  }
`;
//LoansSubtitle
const LoansSubtitle = styled.div`
  @media (max-width: 590px) {
    font-size: 16px;
  }
`;
//LoansBtnWrapper style
const LoansBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
//LoansInvest style
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
//LoansBtn style
const LoansBtn = styled.button`
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

const Loan = ({
  loan: { title, tranche, available, annualised_return, ltv },
}) => {
  return (
    <LoanWrapper>
      <LoansTitle>{title}</LoansTitle>
      <LoansSubtitle>
        <p>tranche: {tranche}</p>
        <p>available: {`${available}$`}</p>
        <p>annualised return: {annualised_return}</p>
        <p>ltv: {ltv}</p>
      </LoansSubtitle>

      {/* <LoansBtnWrapper>
        {props.loan.invested > 0 && <LoansInvest>Invested</LoansInvest>}

        <LoansBtn
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        >
          Invest
        </LoansBtn>
      </LoansBtnWrapper>
      <LoanPopup
        loan={props.loan}
        show={showPopup}
        setShowPopup={setShowPopup}
        changeInvestedValue={props.changeInvestedValue}
      /> */}
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
  }).isRequired,
};
