import styled from "@emotion/styled";

export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  color: #fff;
  background-color: ${props => props.theme.colors.lightBlue};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 3px;
  tr{
    display: flex;
    th{
      width: calc(100% / 3);
      padding: 10px;
      border: 1px solid ${props => props.theme.colors.white};
    }
  }
  
`;

export const Transaction = styled.tr`
  display: flex;
    td{
        width: calc(100% / 3);
        padding: 12px;
        padding-left: calc((100%/3)/2.5);
        border: 1px solid ${props => props.theme.colors.borderColor};
      }
  &:nth-of-type(2n){
    background-color: ${props => props.theme.colors.grey};
  }
`;

export const TableBody = styled.tbody`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`;
