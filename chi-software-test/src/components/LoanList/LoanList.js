import React, { useState, useEffect, useMemo } from "react";
import Api from "../../API/Api";
import { ALL_LOANS } from "../../API/paths";
import styled from "styled-components";
import { numberWithCommas } from "../../utils";
import Loan from "../Loan/Loan";

const HeaderContainer = styled.header`
  padding: 32px 64px;
  border-bottom: 1px solid rgba(48, 50, 71, 0.1);
`;

const HeaderTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 60px;
  line-height: 36px;
  @media (max-width: 590px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    font-size: 33px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-weight: 600;
  @media (max-width: 590px) {
    font-size: 16px;
  }
  @media (max-width: 497px) {
    flex-direction: column;
  }
`;

const LoanContainer = styled.div`
  padding: 32px 64px;
  max-width: 950px;
  @media (max-width: 497px) {
    padding: 32px 40px;
  }
`;

const LoanList = () => {
  const [loansData, setLoansData] = useState([]);

  useEffect(() => {
    Api.get(ALL_LOANS).then((data) => setLoansData(data));
  }, []);

  const totalValue = useMemo(
    () =>
      loansData.reduce(
        (res, loan) => res + parseInt(loan.available.replace(",", "")),
        0
      ),
    [loansData]
  );

  const invest = (id, amount) => {
    const loanToInvest = loansData.find((loan) => id === loan.id);
    const fieldsToUpdate = {
      available: `${Number(loanToInvest.available.replace(",", "")) - amount}`,
      amountOfInvestment: loanToInvest.amountOfInvestment + 1,
    };
    Api.patch(ALL_LOANS, id, fieldsToUpdate).then((updatedLoan) => {
      const updatedLoansData = loansData.map((loan) => {
        if (updatedLoan.id === loan.id) {
          return updatedLoan;
        }
        return loan;
      });
      setLoansData(updatedLoansData);
    });

    // Api.patch(ALL_LOANS, id, {available:}).then(() => {
    //
    // });
  };

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Current Loans</HeaderTitle>
      </HeaderContainer>
      <LoanContainer>
        {loansData.map((loan) => (
          <Loan invest={invest} loan={loan} key={loan.id} />
        ))}
        <Total>
          <p>Total amount available for investment:</p>
          <p>{`$${numberWithCommas(totalValue)}`}</p>
        </Total>
      </LoanContainer>
    </>
  );
};

export default LoanList;
