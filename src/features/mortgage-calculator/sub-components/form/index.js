import React from "react";
import useForm from "../../hooks/use-form";
import {
  DollarField,
  SelectField,
  PercentField,
} from "../../../../components/fields";
import {
  payFrequencies,
  getTermOptions,
  getAmorOptions,
  prePayFrequencies,
} from "../../helpers/get-options";
import messages from "./messages";
import { Form, Button, Title } from "./styles";

const initialValues = {
  rate: 1,
  pv: 100000,
  paymentFreq: 12, // or 24 or 26 or 52
  nPer: 25, //paymentFreq * 12
  term: 5, // paymentFreq * 1-10
  additionalPrincipalPayment: 0,
  paymentInterval: "once", // 'yearly', 'each'
};

const anyErrors = (errors) =>
  Object.values(errors).filter((a) => a).length !== 0;

export default ({ onSubmitForm }) => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit: (values) => onSubmitForm({ values, errors }),
  });
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Title>{messages.payPlan}</Title>
        <DollarField
          text={messages.mtgAmount}
          name="pv"
          value={values.pv}
          onChange={handleChange}
          errorText={errors.pv && messages.mtgAmountRq}
        />
        <PercentField
          text={messages.interestRate}
          name="rate"
          value={values.rate}
          onChange={handleChange}
          errorText={errors.rate && messages.interestRateRq}
        />
        <SelectField
          text={messages.amortization}
          name="nPer"
          options={getAmorOptions()}
          value={values.nPer}
          onChange={handleChange}
        />
        <SelectField
          text={messages.paymentFreq}
          name="paymentFreq"
          options={payFrequencies}
          value={values.paymentFreq}
          onChange={handleChange}
        />
        <SelectField
          text={messages.paymentFreq}
          name="term"
          options={getTermOptions()}
          value={values.term}
          onChange={handleChange}
        />
      </div>
      <div>
        <Title>{messages.prePayPlan}</Title>
        <DollarField
          text={messages.prepaymentAmount}
          name="additionalPrincipalPayment"
          value={values.additionalPrincipalPayment}
          onChange={handleChange}
          errorText={
            errors.additionalPrincipalPayment && messages.prepaymentAmountRq
          }
        />
        <SelectField
          text={messages.prepaymentFrequency}
          name="paymentInterval"
          options={prePayFrequencies}
          value={values.paymentInterval}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={submitting || anyErrors(errors)}>
        {messages.calculate}
      </Button>
    </Form>
  );
};
