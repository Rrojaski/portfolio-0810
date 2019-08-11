import styled from "styled-components";

const Border = styled.div`
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : '#fff')};
  margin: ${(props) => (props.margin)};
  width: 100%;
`;

export default Border;
