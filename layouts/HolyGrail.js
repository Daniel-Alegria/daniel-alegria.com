import styled from 'styled-components';
import { Grid, Cell } from "styled-css-grid";
import Navbar from '../components/Navbar'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Advertisement from '../components/Advertisement';
import Footer from '../Footer';

// TODO: Don't forget to incorporate media queries.
const HolyGrailLayout = styled.div`
  height: 100%;
`;

const HolyGrail = ({ children }) => (
  <HolyGrailLayout>
    <Grid
      style={{ height: "100%" }}
      columns={"1fr 3fr 1fr"}
      rows={"50px 50px 1fr 50px"}
      areas={[
        "header         header      header",
        "navbar         navbar      navbar",
        "sidebar        content     advertisement",
        "sidebar        content     advertisement",
        "footer         footer      footer"
      ]}>
    <Cell area="header">
      <Header />
    </Cell>
    <Cell area="navbar">
      <Navbar />
    </Cell>
    <Cell area="content">
      { children }
    </Cell>
    <Cell area="sidebar">
      <Sidebar />
    </Cell>
    <Cell area="advertisement">
      <Advertisement />
    </Cell>
    <Cell area="footer">
      <Footer />
    </Cell>
    </Grid>
  </HolyGrailLayout>
)

export default HolyGrail