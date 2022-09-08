import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsReceiptCutoff } from 'react-icons/bs';
import { GiTargeted } from 'react-icons/gi';
import { colors } from '../../styles/colors';
import styled from '@emotion/styled';

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  /* height: 181px; */
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

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${colors.pink[400]};
  padding: 8px 12px;
  color: white;
  width: 100%;
  cursor: pointer;

  @media screen and (min-width: 840px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${colors.pink[400]};
    padding: 8px 12px;
    color: white;
    width: 100%;
    cursor: pointer;
    border-radius: 6px;
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

function Sidebar() {
  return (
    <StyledSidebar className='sidebar'>
      <SidebarHeader className='sidebar__header'>
        <Logo />
      </SidebarHeader>
      <StyledList className='sidebar__list'>
        <StyledItem className='sidebar__list-item'>
          <BiCategoryAlt />
          Categories
        </StyledItem>
        <StyledItem className='sidebar__list-item'>
          <BsReceiptCutoff />
          Transactions
        </StyledItem>
        <StyledItem className='sidebar__list-item'>
          <GiTargeted />
          Budgets
        </StyledItem>
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
