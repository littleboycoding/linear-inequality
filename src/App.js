import React, { useState } from "react";
import styled from "styled-components/macro";
import { Section, Sections } from "./SectionList";
import { useSwipeable } from "react-swipeable";
import { FlyRight, FlyLeft, FlyDown } from "./Animation";

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header" "nav main";

  @media (max-width: 800px) {
    grid-template-areas: "header header" "main main";
  }
`;

const Nav = styled.nav`
  background-color: #eee;
  grid-area: nav;

  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 90%;

  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    height: 100vh;
    animation: ${({ shown }) => (shown ? FlyRight : FlyLeft)} 0.5s forwards;
    z-index: 2;
  }
`;

const Main = styled.main`
  grid-area: main;
  padding: 0 15px;
  max-height: 100%;
  overflow: auto;

  img {
    max-width: 100%;
    max-height: 50vh;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
  }

  figure {
    text-align: center;
  }

  pre {
    display: block;
    padding: 10px;
    background-color: #eee;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: header;
  background-color: #7a9e7e;
  font-weight: bold;
  color: white;
  padding: 10px;
  text-align: center;
  overflow: hidden;
  position: relative;

  .grid {
    position: absolute;
    top: 0;
    height: 100%;
    z-index: 0;
  }

  div {
    z-index: 1;
  }
`;

// const Footer = styled.footer`
//   background-color: #7a9e7e;
//   grid-area: footer;
// `;

const Title = styled.h1`
  background-color: #678e6c;
  padding: 5px 10px;
  border-radius: 10px;

  animation: ${FlyDown} 0.5s;
`;

const NavButton = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ focus }) => (focus ? "#050" : "grey")};
  text-decoration: none;
  transition: all 0.3s;

  div:nth-child(1) {
    background-color: ${({ focus }) => (focus ? "#050" : "grey")};
    transition: all 0.3s;
  }

  &:hover {
    color: #020;
    // text-decoration: underline;
    transition: all 0.3s;

    .circle {
      background-color: #020;
      transition: all 0.3s;
    }
  }

  .circle {
    background-color: #333;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
`;

function NavButtonStyled({ title, focus } = { focus: false }) {
  return (
    <NavButton focus={focus} href={"#" + title}>
      <div className="circle" />
      <span>{title}</span>
    </NavButton>
  );
}

function App() {
  const [focus, focusSet] = useState(Array(Sections.length));
  const [navShow, navShowSet] = useState(true);

  const swipeHandler = useSwipeable({
    onSwipedRight: () => navShowSet(true),
    onSwipedLeft: () => navShowSet(false),
  });

  function onFocus(index, isFocus) {
    const currentFocus = [...focus];
    currentFocus[index] = isFocus;

    focusSet(currentFocus);
  }

  return (
    <Container {...swipeHandler}>
      <Header>
        <img
          className="grid"
          alt=""
          src="https://svgshare.com/i/9Eo.svg"
          width="100%"
          height="100%"
        />
        <div>
          <Title>อสมการเชิงเส้น 🚀</Title>
          <p>เรียนอสมการเชิงเส้นออนไลน์ ✏️</p>
        </div>
      </Header>
      <Nav shown={navShow}>
        {Sections.map(({ title }, index) => (
          <NavButtonStyled key={title} title={title} focus={focus[index]} />
        ))}
      </Nav>
      <Main onClick={() => navShowSet(false)}>
        {Sections.map(({ title, p }, index) => (
          <Section
            key={title}
            title={title}
            p={p}
            onFocus={(focus) => onFocus(index, focus)}
          />
        ))}
      </Main>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
