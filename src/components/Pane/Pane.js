import styled from "styled-components";

const Pane = styled.div`
  box-sizing: border-box;
  background-image: url('${(props) => (props.backImage)}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
  width: 100%;
  height: 250px;
  border-radius: 8px;
`;

export default Pane;
