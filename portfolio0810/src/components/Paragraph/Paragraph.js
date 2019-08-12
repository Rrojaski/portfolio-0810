import styled from "styled-components";

const Paragraph = styled.div`
  font-size: ${props => props.fsize};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "1.2rem")};
  font-weight: ${(props) => (props.fweight ? props.fweight : '400')};
  padding-top: 15px;
  padding-bottom: 15px;
  padding: ${props => props.padding};
  color: ${props => (props.color ? props.color : "#fff")};
`;

export default Paragraph;
