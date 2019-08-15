import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
  //TODO: (For all components)
  // - add grid area
const MainFooter = styled.footer`
  grid-area: footer;

  height: 50px;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Footer = () => (
  <MainFooter>
    Footer
  </MainFooter>
)

export default Footer
