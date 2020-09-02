import React, { useState } from "react";
import createPaymentSchedule from "./helpers/create-schedule";
import { Root } from "./styles";
import MortgageForm from "./sub-components/form";
import ResultTable from "./sub-components/summary";

const intervals = {
  each: 1,
  yearly: 12,
};

const calculatePayment = ({
  rate,
  pv,
  nPer,
  paymentFreq,
  additionalPrincipalPayment,
  term,
  paymentInterval,
}) => {
  // adjust values
  const adjustedRate = rate / 100 / paymentFreq;
  const numPeriods = nPer * paymentFreq;
  const numTerm = term * paymentFreq;
  //determine if needs prepayment on principal value
  const paymentSchedule =
    paymentInterval === "once"
      ? createPaymentSchedule(
          pv - additionalPrincipalPayment,
          adjustedRate,
          numPeriods,
          additionalPrincipalPayment
        )
      : createPaymentSchedule(
          pv,
          adjustedRate,
          numPeriods,
          additionalPrincipalPayment,
          intervals[paymentInterval]
        );

  //get rid of any extra pay periods where balance is 0 and payment is 0
  const adjustedPaymentSchedule = paymentSchedule.filter(
    (i) => i.periodPayment || i.balance
  );
  // return results per term and amoritization
  return {
    paymentTerm: adjustedPaymentSchedule[numTerm - 1],
    paymentAmor: adjustedPaymentSchedule[adjustedPaymentSchedule.length - 1],
  };
};

const getEvolvedVals = (values) => {
  const evolvedVal = {};
  Object.keys(values.values).forEach(
    (v) =>
      !isNaN(
        parseInt(values.values[v])
          ? (evolvedVal[v] = parseInt(values.values[v]))
          : (evolvedVal[v] = values.values[v])
      )
  );
  return evolvedVal;
};

export default () => {
  const [results, setResults] = useState(null);

  const onSubmitForm = ({ values }) => {
    const evolvedVal = getEvolvedVals(values);
    const res = calculatePayment(evolvedVal);
    return setResults(res);
  };

  return (
    <Root>
      <MortgageForm onSubmitForm={onSubmitForm} />
      {results && <ResultTable results={results} />}
    </Root>
  );
};
