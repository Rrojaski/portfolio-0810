import styled from 'styled-components';

const Section2 = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '65px')};
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : '65px')};
  width: 100%;
  background-image: url('${(props) => (props.backImage)}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default Section2;

// Made Other Section because using background and backgound-image on the same component couses the the former from properly working