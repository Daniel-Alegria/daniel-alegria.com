import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
  //TODO: (For all components)
  // - add grid area
const MainFooter = styled.footer`
  grid-area: footer;

  height: 100px;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Footer = () => (
  <MainFooter>
    Footer poop
  </MainFooter>
)

export default Footer