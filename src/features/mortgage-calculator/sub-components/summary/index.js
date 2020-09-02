import React from "react";
import messages from "./messages";
import { Block, Row, Title } from "./styles";

const resultFields = [
  "numberPayments",
  "mtgPayments",
  "principalPayments",
  "interestPayments",
  "totalCost",
];

const resultTypes = {
  numberPayments: "currentPayCycle",
  mtgPayments: "periodPayment",
  principalPayments: "totalPrincipal",
  interestPayments: "totalInterest",
  totalCost: "totalPaid",
};

const resultRow = (fieldName) => {
  const resultVal = resultTypes[fieldName];
  return <div>{messages[fieldName]}</div>;
};

export default ({ results }) => {
  // const resultVal = resultTypes[fieldName];
  return (
    <Block>
      {console.log(results)}
      <Row>
        <div />
        <div>{messages.paymentAmor}</div>
        <div>{messages.paymentTerm}</div>
      </Row>
      {resultFields.map((f) => (
        <Row>
          <div>{messages[f]}</div>
          <div>{results.paymentAmor[resultTypes[f]]}</div>
          <div>{results.paymentTerm[resultTypes[f]]}</div>
        </Row>
      ))}
    </Block>
  );
};
