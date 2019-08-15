import Link from "next/link";
import styled from "styled-components";

// TODO: REMEMBER TO REPLACE VARIABLES WITH UTILS

// nav links
const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/hireMe", label: "Hire Me!" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const ClassicNavbar = styled.div`
  grid-area: navbar;

  position: sticky;
  display: flex;
  align-items: center;

  height: 100%;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-left: 50px;
  margin-right: 50px;
`;

const Brand = styled.div`
  flex: 0 1 auto;
  display: flex;
  height: 100%;
  a {
    display: flex;
    align-items: center;
    padding: 0;
    width: 150px;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
    img {
      height: auto;
      width: 150px;
    }
  }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
  li {
    border-radius: 5px;
    margin-right: 15px;
    &:active {
      background-color: darken(#2980b9, 25%);
    }
  }
  a {
    border-radius: 5px;
    text-decoration: none;
    color: #4b4b4b;
    padding: 7.5px 15px;

    transition: all 250ms;
    &:hover {
      background-color: #aaaaaa;
      cursor: pointer;
      color: #fafafa;
    }
  }
`;

const Navbar = () => (
  <ClassicNavbar>
    <NavWrapper>
      <NavContainer>
        <Brand>
          <Link href="/">
            <a>Daniel Alegria</a>
          </Link>
        </Brand>
        <NavItems>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </NavItems>
      </NavContainer>
    </NavWrapper>
  </ClassicNavbar>
);

export default Navbar;
