import styled from "styled-components";

const Border = styled.div`
  border-bottom: 2px solid ${(props) => (props.bcolor)};
  width: 70px;
  padding: 8px 0;
  margin: ${(props) => (props.margin)};
  z-index: 0;
`;

export default Border;
