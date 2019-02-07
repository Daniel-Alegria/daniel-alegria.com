import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
  //TODO: (For all components)
  // - add grid area
const MainContent = styled.article`
  grid-area: content;
  
  height: 100%;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Content = () => (
  <MainContent>
    Content
  </MainContent>
)

export default Content