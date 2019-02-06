import Link from 'next/link'
import styled from 'styled-components'

// TODO: REMEMBER TO REPLACE VARIABLES WITH UTILS

// nav links
const links = [
  { href: '#', label: 'Item 1' },
  { href: '#', label: 'Item 2' },
  { href: '#', label: 'Item 3' },
  { href: '#', label: 'Item 4' },
  { href: '#', label: 'Item 5' }
]
.map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

// variables to add:
// - border
// - border-radius
// - light-blue
// - dark-blue
// - light-blue
// - spacer-1
// - spacer-2
// - add margin-right and margin-left
const ClassicNavbar = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
  background-color: #3498db;
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
  margin-left: 10%;
  margin-right: 10%;
`;

const Brand = styled.div`
  flex: 0 1 auto;
  display: flex;
  height: 100%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 150px;
    border-radius: 5px;
    &:hover {
      background-color: #2980b9;
      cursor: pointer;
      color: #fafafa;
    }
    img {
      height: auto;
      width: 150px;
    }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
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
      background-color: #2980b9;
      cursor: pointer;
      color: #fafafa;
`;

const Navbar = () => (
  <ClassicNavbar>
    <NavWrapper>
      <NavContainer>
        <Brand>
          <Link href="/">
            <a>
              <img src="https://i.imgur.com/6YnTsXz.png" />
            </a>
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
)

export default Navbar
