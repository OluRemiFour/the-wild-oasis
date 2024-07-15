import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledMobile = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  padding: 4rem;
  height: 100dvh;
  overflow-y: hidden;
  z-index: 999;
  position: fixed;
`;

const StyledClose = styled.p`
  margin: 0 1.2rem;
  font-size: 3rem;
`;
const StyledP = styled.p`
  margin: 1.2rem;
  font-size: 3rem;
  display: none;
  position: fixed;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledSidebar>
        <Logo />
        <MainNav />
      </StyledSidebar>
      <StyledP onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
      </StyledP>
      {isOpen && (
        <StyledMobile>
          <StyledClose>
            <IoCloseSharp onClick={() => setIsOpen((open) => !open)} />
          </StyledClose>
          <MainNav />
        </StyledMobile>
      )}
    </>
  );
}

export default Sidebar;
