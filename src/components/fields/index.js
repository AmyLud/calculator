import React from "react";
import { Field, FieldInput, AddOn, Error } from "./styles";

export const DollarField = ({ name, text, value, onChange, errorText }) => (
  <Field addOn left>
    <label htmlFor={name}>{text}</label>
    <FieldInput>
      <AddOn> $ </AddOn>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </FieldInput>
    <Error>{errorText}</Error>
  </Field>
);

export const PercentField = ({ name, text, value, onChange, errorText }) => (
  <Field addOn right>
    <label htmlFor={name}>{text}</label>
    <FieldInput>
      <input
        type="number"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <AddOn right> % </AddOn>
    </FieldInput>
    <Error>{errorText}</Error>
  </Field>
);

export const SelectField = ({ name, text, value, onChange, options = [] }) => (
  <Field half>
    <label htmlFor={name}>{text}</label>
    <FieldInput>
      <select name={name} id={name} onChange={onChange} value={value}>
        {options.map(({ value, text, selected }) => (
          <option key={text} value={value} selected={selected}>
            {text}
          </option>
        ))}
      </select>
    </FieldInput>
  </Field>
);
