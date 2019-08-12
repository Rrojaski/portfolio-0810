import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.sizex};
  height: ${props => props.sizey};
  min-width: ${props => props.minsizex};
  min-height: ${props => props.minsizey};
  @media (max-width: 767px) {
    display: none;
  }
`;

export default Image;
