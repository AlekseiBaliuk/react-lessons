import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid black;
  margin-left: 30px;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid black;
  /* margin-left: 30px; */
  padding: 10px;
`;

export const Td = styled.td`
  border: 1px solid black;
  /* margin-left: 30px; */
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;

  &:hover,
  :focus {
    color: coral;
  }
`;

export const Span = styled.span`
color: ${({status}) => status === 'no' ? "red" : "green"}
`