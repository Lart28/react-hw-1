import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: ${props => props.theme.colors.white};
  margin: 50px auto;
  max-width: 350px; 
  padding: 30px 0px 0px 0px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.darkGrey};
  font-weight: 500;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const setBgColor = ({ statType, theme}) => {
  switch (statType) {
    case ".docx":
      return theme.colors.turqoise;
    case ".pdf":
      return theme.colors.violet;
    case ".mp3":
      return theme.colors.red;
    case ".psd":
      return theme.colors.blue;
    case ".jpg":
      return theme.colors.green;
    default:
      return theme.colors.black ;
  }
};

export const StatItem = styled.li`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background-color: ${ setBgColor };
`;

export const StatLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const StatValue = styled.span`
  font-size: 20px;
`;