import styled from "styled-components";

const Paragraph = styled.div`
  font-size: ${props => props.fsize};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "1.2rem")};
  font-weight: 400;
  padding-top: 15px;
  padding-bottom: 15px;
  padding: ${props => props.padding};
  color: ${props => (props.color ? props.color : "rgba(255,255,255,0.6)")};
`;

export default Paragraph;
