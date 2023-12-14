import styled from "@emotion/styled";

export const Friends = styled.ul`
  margin: 0 auto;
  width: 200px;
`;

export const Friend = styled.li`
  display: flex;
  padding: 5px 10px 5px 10px;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 10px;
  `;

const setStatusColor = ({ status, theme }) => {
  switch (status) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.white;
  }
}

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${setStatusColor};
`;

export const Avatar = styled.img`
  margin: 0 10px 0 10px;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
`;