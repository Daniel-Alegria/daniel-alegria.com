import styled from 'styled-components'

  //TODO: Add variables
  // - border
  // - border-radius
  //TODO: (For all components)
  // - add grid area
const MainAdvertisement = styled.div`
  grid-area: advertisement;
  height: 100%;
  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const Advertisement = () => (
  <MainAdvertisement>
    Advertisement
  </MainAdvertisement>
)

export default Advertisement