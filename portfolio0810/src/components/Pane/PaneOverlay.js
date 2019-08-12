import styled from "styled-components";

const PaneOverlay = styled.div`
  box-sizing: border-box;
  background: ${(props) => (props.backColor)};
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 40px;
`;

export default PaneOverlay;
