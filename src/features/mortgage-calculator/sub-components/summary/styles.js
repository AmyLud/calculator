import styled from "styled-components";

export const Block = styled.div`
  padding: ${({ theme }) => theme.spacing.small}
    ${({ theme }) => theme.spacing.small};
  background: ${({ theme }) => theme.color.neutral.lightest};
  margin-bottom: ${({ theme }) => theme.spacing.large};
  flex: 1;
`;

export const Row = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: flex;
  justify-content: space between;
  > div {
    flex: 1;
  }
  > div:first-child {
    flex: 2;
  }
`;
