import styled from "styled-components";
import { Grid, Cell } from "styled-css-grid";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Content from "../components/Content";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

// TODO: Don't forget to incorporate media queries.
const HolyGrailLayout = styled.div`
  height: 100%;
  margin: 0;
`;

const HomeLayout = ({ children }) => (
  <HolyGrailLayout>
    <Grid
      style={{ height: "100%"}}
      columns={"1fr"}
      rows={"50px 90vh 1fr minmax(250px, 500px) 50px"}
      areas={["navbar", "header", "content", "calltoaction", "footer"]}
    >
      <Cell area="navbar">
        <Navbar />
      </Cell>
      <Cell area="header">
        <Header />
      </Cell>
      <Cell area="content">
        <Content />
      </Cell>
      <Cell area="calltoaction">
        <CallToAction />
      </Cell>
      <Cell area="footer">
        <Footer />
      </Cell>
    </Grid>
  </HolyGrailLayout>
);

export default HomeLayout;
