import styled, { css } from "styled-components";

export const Field = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xxsmall};
  }
  input,
  select {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.xsmall};
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.neutral.light};
    background: white;
    border-radius: ${({ theme }) => theme.spacing.xxsmall};
    border-top-left-radius: ${({ addOn, left, theme }) =>
      addOn && left ? "0" : theme.spacing.xxsmall};
    border-top-right-radius: ${({ addOn, right, theme }) =>
      addOn && right ? "0" : theme.spacing.xxsmall};
    border-bottom-left-radius: ${({ addOn, left, theme }) =>
      addOn && left ? "0" : theme.spacing.xxsmall};
    border-bottom-right-radius: ${({ addOn, right, theme }) =>
      addOn && right ? "0" : theme.spacing.xxsmall};
  }
  input:focus,
  input:active,
  input:hover {
    background: white;
    outline: none;
  }
`;

export const FieldInput = styled.div`
  width: 100%;
  display: flex;
`;

export const AddOn = styled.div`
  padding: ${({ theme }) => theme.spacing.xsmall};
  display: inline;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing.xlarge};
  text-align: center;
  background: ${({ theme }) => theme.color.neutral.light};
  ${(props) =>
    props.right
      ? css`
          border-top-right-radius: ${({ theme }) => theme.spacing.xxsmall};
          border-bottom-right-radius: ${({ theme }) => theme.spacing.xxsmall};
        `
      : css`
          border-top-left-radius: ${({ theme }) => theme.spacing.xxsmall};
          border-bottom-left-radius: ${({ theme }) => theme.spacing.xxsmall};
        `}
`;

export const Error = styled.p`
  color: red;
  margin: 0;
`;
