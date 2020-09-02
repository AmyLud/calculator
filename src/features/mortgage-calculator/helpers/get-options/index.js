import messages from "./messages";

export const getAmorOptions = (start = 1, end = 30) => {
  let i = end;
  let options = [];
  while (i > start - 1) {
    options.push({
      value: i,
      text: `${i} ${messages.years}`,
      selected: i === 25 && "selected",
    });
    i--;
  }
  return options;
};

export const getTermOptions = (start = 1, end = 10) => {
  let i = end;
  let options = [];
  while (i > start - 1) {
    options.push({
      value: i,
      text: `${i} ${messages.years}`,
      selected: i === 5 && "selected",
    });
    i--;
  }
  return options;
};

export const payFrequencies = [
  {
    value: 12,
    text: messages.monthly,
    selected: "selected",
  },
  {
    value: 24,
    text: messages.semi,
  },
  {
    value: 26,
    text: messages.biWeek,
  },
  {
    value: 52,
    text: messages.week,
  },
];

export const prePayFrequencies = [
  {
    value: "once",
    text: messages.once,
    selected: "selected",
  },
  {
    value: "each",
    text: messages.each,
  },
  {
    value: "yearly",
    text: messages.yearly,
  },
];
