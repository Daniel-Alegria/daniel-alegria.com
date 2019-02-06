import styled from 'styled-components';
import Navbar from '../components/Navbar'

export default () => (
  <div>
    <Navbar />
    <Title>Index Page</Title>
  </div>
);

const Title = styled.h1`
  color: red;
`;