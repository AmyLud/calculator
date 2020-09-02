export default (principalVal, rate, numPeriods) => {
  const payment =
    (rate * principalVal * Math.pow(1 + rate, numPeriods)) /
    (Math.pow(1 + rate, numPeriods) - 1);
  return Math.ceil(payment * 100) / 100;
};
