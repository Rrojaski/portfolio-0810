import styled from "styled-components";

const Button = styled.button`
  box-sizing: border-box;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background: ${props => props.bcolor};
  color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
  border-radius: 5px;
  font-size: ${props => props.fsize};
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: ${props => props.hcolor};
    background: ${props => props.hbcolor};
    border: 1px solid ${props => props.hborderColor};
  }
`;

export default Button;
