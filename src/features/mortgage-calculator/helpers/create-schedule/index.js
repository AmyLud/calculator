import roundCent from "../round-to-cent";
import calculateMonthlyPayment from "../calculate-payment";

const extraPaymentApplied = (nPer, remainingPeriods, additionalFreq) =>
  (nPer - remainingPeriods + 1) % additionalFreq === 0;

export default (
  principal,
  rate,
  nPer,
  additionalPrincipalPayment = 0,
  additionalFreq = 0
) => {
  const paymentAmt = calculateMonthlyPayment(principal, rate, nPer);
  let payments = [];
  let totalPaid = 0,
    totalInterest = 0,
    principalPayment = 0;
  const addPayment = (balance, remainingPeriods) => {
    let interestPayment = roundCent(principal * rate);

    principalPayment = extraPaymentApplied(
      nPer,
      remainingPeriods,
      additionalFreq
    )
      ? roundCent(paymentAmt - interestPayment + additionalPrincipalPayment)
      : roundCent(paymentAmt - interestPayment);

    if (principal > principalPayment) {
      principal = roundCent(balance - principalPayment);
    } else {
      principalPayment = roundCent(balance);
      principal = 0;
    }
    const periodPayment = roundCent(interestPayment + principalPayment);
    totalInterest += interestPayment;
    totalPaid += periodPayment;

    payments.push({
      currentPayCycle: nPer - remainingPeriods + 1,
      interestPayment: interestPayment,
      principalPayment: principalPayment,
      periodPayment,
      totalPaid: roundCent(totalPaid),
      totalInterest: roundCent(totalInterest),
      balance: principal,
    });

    if (balance > 0 && remainingPeriods > 1) {
      addPayment(principal, remainingPeriods - 1);
    } else {
      return;
    }
  };
  addPayment(principal, nPer);
  return payments;
};
