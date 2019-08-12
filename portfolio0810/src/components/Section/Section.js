import styled from 'styled-components';

const Section = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '80px')};
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : '80px')};
  width: 100%;
  background: ${(props) => (props.backColor)};
`

export default Section;