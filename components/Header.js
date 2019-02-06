import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
const MainHeader = styled.header`
  height: 50px;
  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Header = () => (
  <MainHeader>
    Header
  </MainHeader>
)

export default Header