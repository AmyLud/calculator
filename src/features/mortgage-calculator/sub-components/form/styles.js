import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  > div {
    padding: ${({ theme }) => theme.spacing.medium}
      ${({ theme }) => theme.spacing.large};
    background: ${({ theme }) => theme.color.neutral.lightest};
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-top: 0;
  padding: 0;
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.secondary.dark};
  padding: ${({ theme }) => theme.spacing.xsmall}
    ${({ theme }) => theme.spacing.medium};
`;
