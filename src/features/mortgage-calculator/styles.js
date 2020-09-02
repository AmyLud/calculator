import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.xlarge};
  > form:first-child {
    margin-right: ${({ theme }) => theme.spacing.medium};
  }
`;
