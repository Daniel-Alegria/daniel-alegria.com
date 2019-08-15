import styled from "styled-components";

const MainCallToAction = styled.article`
  grid-area: "calltoaction";

  height: 100%;
  min-height: 250px;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
  padding: 50px;
`;

const CallToAction = () => (
  <MainCallToAction>
    <p>This is where the call to action goes</p>
  </MainCallToAction>
);

export default CallToAction;
