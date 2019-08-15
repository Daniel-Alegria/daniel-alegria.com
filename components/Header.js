import styled from "styled-components";

const MainHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  border: solid 3px #4b4b4b;
  border-radius: 5px;
  padding: 50px;
  h1 {
    font-size: 7.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const Header = () => (
  <MainHeader>
    <h1>Hello, World!</h1>
    <p>
      My name is Daniel and I am a web developer from the San Francisco Bay
      Area.
    </p>
  </MainHeader>
);

export default Header;
