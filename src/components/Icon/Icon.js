import styled from "styled-components";

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  background-color: #424242;
  color: #fff;
  font-size: 12px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #ffb637;
  };
`;

export default Icon;
