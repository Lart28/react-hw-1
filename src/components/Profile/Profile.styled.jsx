import styled from "@emotion/styled";

export const ProfileCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  margin: 50px auto;
  padding: 25px 0px 0px 0px;
  max-width: 250px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  margin: 0 auto 20px auto;
  display: block;
  border-radius: 50%;
  width: 100px;
`;

export const Description = styled.div`
  margin: 0 auto 30px auto;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Info = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.darkGrey};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.grey};
`; 

export const StatItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid ${props => props.theme.colors.borderColor};
  padding: 20px 0px;
  text-align: center;
`; 

export const StatItemName = styled.span`
  color: ${props => props.theme.colors.darkGrey};
  font-size: 14px;
  margin-bottom: 5px;
`; 

export const StatItemValue = styled.span`
  font-size: 18px;
  font-weight: 700;
`; 