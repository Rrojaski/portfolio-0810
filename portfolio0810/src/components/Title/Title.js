import styled from 'styled-components';

const Title = styled.div`
  font-size: ${(props) => (props.largeFont ? '3.75rem' : '3rem')};
  font-size: ${(props) => (props.fontSize)};
  font-weight: 600;
  color: ${(props) => (props.color)};
`

export default Title;