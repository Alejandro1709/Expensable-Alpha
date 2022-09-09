import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { colors } from '../../styles/colors';
import styled from '@emotion/styled';
import Link from './Link';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.gray[100]};

  @media screen and (min-width: 840px) {
    height: 100%;
    width: 239px;
  }
`;

const SidebarHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-right: 1px solid #eee;
  background-color: white;

  @media screen and (min-width: 840px) {
    background-color: transparent;
  }
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  /* background-color: aqua; */

  @media screen and (min-width: 840px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.8rem;
  }
`;

const StyledFooter = styled.footer`
  display: none;

  @media screen and (min-width: 840px) {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    margin-top: auto;
  }
`;

function Sidebar({ navigation }) {
  return (
    <StyledSidebar className='sidebar'>
      <SidebarHeader className='sidebar__header'>
        <Logo />
      </SidebarHeader>
      <StyledList className='sidebar__list'>
        {navigation.map((nav) => (
          <Link key={nav.id} nav={nav} />
        ))}
      </StyledList>
      <StyledFooter className='sidebar__footer'>
        <div className='sidebar__footer-item'>
          <h4>Testino Diprueba</h4>
          <p>testino@gmail.com</p>
        </div>
        <div className='sidebar__footer-item'>
          <p>Logout</p>
        </div>
      </StyledFooter>
    </StyledSidebar>
  );
}

export default Sidebar;
