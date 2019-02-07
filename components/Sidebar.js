import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
  //TODO: (For all components)
  // - add grid area
const MainSidebar = styled.article`
  grid-area: sidebar;

  height: 100%;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Sidebar = () => (
  <MainSidebar>
    Sidebar
  </MainSidebar>
)

export default Sidebar